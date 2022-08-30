import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ThemeService } from 'src/app/utils/services/theme.service';

@Component({
  selector: 'app-home-price-table',
  templateUrl: './home-price-table.component.html',
  styleUrls: ['./home-price-table.component.scss'],
})
export class HomePriceTableComponent implements OnInit {
  public now: Date = new Date();
  isDarkMode!: boolean;
  title = 'asyildiz';
  showFiller = false;


  constructor( private themeService: ThemeService,public dialog: MatDialog ){ }

  ngOnInit(): void {

  }


}
