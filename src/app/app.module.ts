import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BannerComponent } from './utils/navs/banner/banner.component';
import { NavbarComponent } from './utils/navs/navbar/navbar.component';
import { registerLocaleData } from '@angular/common';
import   localeTr from '@angular/common/locales/tr';
import   localeTrExtra from '@angular/common/locales/extra/tr';
import { HomePriceTableComponent } from './component/home-price-table/home-price-table.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { KvkkPageComponent } from './pages/kvkk-page/kvkk-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ThemeService } from './utils/services/theme.service';
registerLocaleData(localeTr, 'tr-TR', localeTrExtra);
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    HomePriceTableComponent,
    HomeComponent,
    AboutComponent,
    KvkkPageComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    // NgbModule
  ],

  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
