import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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

  ngOnInit(){

  }

  toggleDarkMode(): void {
    this.isDarkMode = this.themeService.isDarkMode();
    this.isDarkMode ? this.themeService.updateTheme('light-mode') : this.themeService.updateTheme('dark-mode');
    console.log(this.isDarkMode);

  }
}
