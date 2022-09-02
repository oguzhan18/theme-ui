import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public now: Date = new Date();
  isDarkMode!: boolean;
  title = 'asyildiz';
  showFiller = false;
  constructor(private themeService: ThemeService) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }

  isCollapsed = false;

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {}

  toggleDarkMode(): void {
    this.isDarkMode = this.themeService.isDarkMode();
    this.isDarkMode
      ? this.themeService.updateTheme('light-mode')
      : this.themeService.updateTheme('dark-mode');
  }
}
