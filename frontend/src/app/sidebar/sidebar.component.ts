import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;
  isMobileView = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkViewport();
  }

  ngOnInit(): void {
    this.checkViewport();
    this.initDropdownToggle();

    const savedState = localStorage.getItem('sidebarCollapsed');
    if (savedState) {
      this.isCollapsed = savedState === 'true';
    }
  }

  private checkViewport(): void {
    this.isMobileView = window.innerWidth <= 768;
    if (this.isMobileView) {
      this.isCollapsed = true;
    }
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    localStorage.setItem('sidebarCollapsed', String(this.isCollapsed));
  }

  private initDropdownToggle(): void {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(item => {
      item.addEventListener('click', (event) => {
        const parent = item.parentElement;
        if (parent) {
          parent.classList.toggle('active');
        }
      });
    });
  }

  logout(event: Event): void {
    event.preventDefault();
    console.log('Logout clicked');
  }
}