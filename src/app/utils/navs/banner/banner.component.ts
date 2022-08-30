import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public now: Date = new Date();
  isDarkMode!: boolean;
  title = 'asyildiz';
  showFiller = false;


  constructor( private themeService: ThemeService,public dialog: MatDialog ){
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }

  ngOnInit(): void {}

  toggleDarkMode(): void {
    this.isDarkMode = this.themeService.isDarkMode();
    this.isDarkMode ? this.themeService.updateTheme('light-mode') : this.themeService.updateTheme('dark-mode');
    console.log(this.isDarkMode);

  }
}
