import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeService } from './utils/services/theme.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  isDarkMode!: boolean;
  title = 'asyildiz';
  showFiller = false;


  constructor( private sanitizer: DomSanitizer, private themeService: ThemeService, ){
    this.themeService.initTheme();
  }

  ngOnInit(): void {

  }
}
