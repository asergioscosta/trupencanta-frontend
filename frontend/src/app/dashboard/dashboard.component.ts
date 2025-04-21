import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { TooltipItem } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('matriculasChart') matriculasChartRef!: ElementRef;
  @ViewChild('statusAlunosChart') statusAlunosChartRef!: ElementRef;
  @ViewChild('statusContratosChart') statusContratosChartRef!: ElementRef;
  @ViewChild('situacaoContratosChart') situacaoContratosChartRef!: ElementRef;

  totalAlunos = 0;
  totalResponsaveis = 0;
  totalProfessores = 0;
  totalCursos = 0;
  totalTurmas = 0;

  totalInativos = 0;
  totalSuspensos = 0;
  totalAtivos = this.totalAlunos - this.totalInativos - this.totalSuspensos;

  alunosChange = 0;
  responsaveisChange = 0;
  professoresChange = 0;
  cursosChange = 0;
  turmasChange = 0;

  contratosAtivos = 0;
  contratosInativos = 0;
  contratosPendentes = 0;
  contratosEmDia = 0;
  contratosVencidos = 0;
  contratosCancelados = 0;
  totalContratos = this.contratosAtivos + this.contratosInativos + this.contratosPendentes;

  startDate: string;
  endDate: string;

  constructor() {
    Chart.register(...registerables);

    const date = new Date();
    this.endDate = this.formatDate(date);
    date.setMonth(date.getMonth() - 1);
    this.startDate = this.formatDate(date);
  }

  ngOnInit(): void {
    this.initCharts();
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  filterData(): void {
    console.log('Filtrando de:', this.startDate, 'até', this.endDate);
    this.updateChartData();
  }

  private initCharts(): void {
    this.createMatriculasChart();
    this.createStatusAlunosChart();
    this.createStatusContratosChart();
    this.createSituacaoContratosChart();
  }

  private updateChartData(): void {
    const randomFactor = Math.random() * 0.4 + 0.8;

    this.totalAtivos = Math.floor((this.totalAlunos - this.totalInativos - this.totalSuspensos) * randomFactor);
    this.contratosAtivos = Math.floor(this.contratosAtivos * randomFactor);
    this.contratosEmDia = Math.floor(this.contratosEmDia * randomFactor);

    this.initCharts();
  }

  private createMatriculasChart(): void {
    this.destroyChart(this.matriculasChartRef);

    new Chart(this.matriculasChartRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
          label: 'Matrículas',
          data: [120, 190, 170, 210, 230, 250],
          borderColor: '#FF6B35',
          backgroundColor: 'rgba(255, 107, 53, 0.1)',
          tension: 0.3,
          fill: true,
          borderWidth: 2
        }]
      },
      options: this.getLineChartOptions()
    });
  }

  private createStatusAlunosChart(): void {
    this.destroyChart(this.statusAlunosChartRef);

    new Chart(this.statusAlunosChartRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Ativos', 'Inativos', 'Suspensos'],
        datasets: [{
          data: [this.totalAtivos, this.totalInativos, this.totalSuspensos],
          backgroundColor: ['#4CAF50', '#F44336', '#FFC107'],
          borderWidth: 1
        }]
      },
      options: this.getPieChartOptions()
    });
  }

  private createStatusContratosChart(): void {
    this.destroyChart(this.statusContratosChartRef);

    new Chart(this.statusContratosChartRef.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Ativos', 'Inativos', 'Pendentes'],
        datasets: [{
          data: [this.contratosAtivos, this.contratosInativos, this.contratosPendentes],
          backgroundColor: ['#4CAF50', '#F44336', '#FFC107'],
          borderWidth: 1
        }]
      },
      options: this.getPieChartOptions()
    });
  }

  private createSituacaoContratosChart(): void {
    this.destroyChart(this.situacaoContratosChartRef);

    new Chart(this.situacaoContratosChartRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Em dia', 'Vencidos', 'Cancelados'],
        datasets: [{
          data: [this.contratosEmDia, this.contratosVencidos, this.contratosCancelados],
          backgroundColor: ['#4CAF50', '#FF9800', '#9E9E9E'],
          borderWidth: 1
        }]
      },
      options: {
        ...this.getPieChartOptions(),
        circumference: 180,
        rotation: -90
      }
    });
  }

  private getLineChartOptions(): any {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top' },
        tooltip: { mode: 'index', intersect: false }
      },
      scales: { y: { beginAtZero: false } }
    };
  }

  private getPieChartOptions(): any {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'right' },
        tooltip: {
          callbacks: {
            label: (context: TooltipItem<'pie' | 'doughnut'>) => {
              const label = context.label || '';
              const value = Number(context.raw) || 0;
              const total = (context.dataset.data as number[]).reduce((a, b) => Number(a) + Number(b), 0);
              const percentage = Math.round((value / total) * 100);
              return `${label}: ${value} (${percentage}%)`;
            }
          }
        }
      }
    };
  }

  private destroyChart(chartRef: ElementRef): void {
    const chartInstance = Chart.getChart(chartRef.nativeElement);
    if (chartInstance) {
      chartInstance.destroy();
    }
  }
}