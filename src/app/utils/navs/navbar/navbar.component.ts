import { Component, DoCheck, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  isCollapsed = false;
  toggleNavbar() {
    console.log("tıklandı");
    this.isCollapsed = !this.isCollapsed;
  }
  constructor( private themeService: ThemeService){
    this.themeService.initTheme();

  }
  ngOnInit(){ }




}
