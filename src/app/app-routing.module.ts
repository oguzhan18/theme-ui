import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { KvkkPageComponent } from './pages/kvkk-page/kvkk-page.component';
import { AllPricePagesComponent } from './pages/live-price-pages/all-price-pages/all-price-pages.component';
import { CurrencyParityComponent } from './pages/live-price-pages/currency-parity/currency-parity.component';
import { GoldComponent } from './pages/live-price-pages/gold/gold.component';
import { OutStoresComponent } from './pages/out-stores/out-stores.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'kvkk', component: KvkkPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'our-stores', component: OutStoresComponent },
  { path: 'all-pirce', component: AllPricePagesComponent },
  { path: 'currencies-prices', component: CurrencyParityComponent },
  { path: 'gold-pirces', component: GoldComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
