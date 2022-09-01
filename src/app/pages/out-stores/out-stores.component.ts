import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ThemeService } from 'src/app/utils/services/theme.service';

@Component({
  selector: 'app-out-stores',
  templateUrl: './out-stores.component.html',
  styleUrls: ['./out-stores.component.scss']
})
export class OutStoresComponent implements OnInit {
  isDarkMode: boolean | any;
  showFiller = false;

  constructor(
    private themeService: ThemeService,
    private dialog: MatDialog
  ){
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }
  ngOnInit() {
  }
  @ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any> | any;
  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  openDialogWithoutRef() {
    this.dialog.open(this.secondDialog);
  }


}
