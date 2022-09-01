import { Component, OnInit } from '@angular/core';
import { webSocket } from 'rxjs/internal/observable/dom/webSocket';
import { CATEGORYTYPE } from 'src/app/utils/models/categoryType';
import { servers } from 'src/app/utils/models/configuration';
import { SocketData } from 'src/app/utils/models/socketData';

@Component({
  selector: 'app-price-calculator',
  templateUrl: './price-calculator.component.html',
  styleUrls: ['./price-calculator.component.scss']
})
export class PriceCalculatorComponent implements OnInit {

  connection = webSocket(servers.real);
  footerList: SocketData[] = [];
  date: Date = new Date();
  miktar:any;
  sonuc:any;
  secilen:any;
  myDropDown : string="";

  constructor() { }


  ngOnInit() {
    this.CurrencyConverter();
  }


  CurrencyConverter() {
  this.connection.subscribe((data: SocketData[]| any) => {
    if (this.footerList) {
      this.footerList = [];
    }

    data.forEach((item: SocketData) => {
      if (item.Category === CATEGORYTYPE.DOVIZ || item.Category === CATEGORYTYPE.PARITE) {
        this.footerList.push(item);
      }

    });
  });

}
onChangeofOptions(newGov: any) {
  //  console.log(newGov);
    newGov = newGov;
    this.sonuc =  newGov * this.miktar ;
    console.log(this.sonuc);
}

}
