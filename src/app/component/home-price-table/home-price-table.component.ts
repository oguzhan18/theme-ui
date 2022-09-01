import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { webSocket } from 'rxjs/internal/observable/dom/webSocket';
import { CATEGORYTYPE } from 'src/app/utils/models/categoryType';
import { servers } from 'src/app/utils/models/configuration';
import { SocketData } from 'src/app/utils/models/socketData';
import { HomeProvider } from 'src/app/utils/services/home.provider';
import { NewsapiService } from 'src/app/utils/services/newsapi.service';
import { ThemeService } from 'src/app/utils/services/theme.service';

@Component({
  selector: 'app-home-price-table',
  templateUrl: './home-price-table.component.html',
  styleUrls: ['./home-price-table.component.scss'],
})
export class HomePriceTableComponent implements OnInit {

  connection = webSocket(servers.real);
  footerList: SocketData[] = [];
  date: Date = new Date();
  miktar:any;
  sonuc:any;
  secilen:any;
  myDropDown : string="";

  showFiller = false;
  isClicked: boolean = false;
  currencyList: SocketData[] = [];
  goldList: SocketData[] = [];
  socketDataList: SocketData[] = [];
  parityList: SocketData[] = [];
  kriptoList: SocketData[] = [];
  ziynetList: SocketData[] = [];


  selectItems: SocketData[] = [];

  dataListReplace1: SocketData[] = [];
  dataListReplace2: SocketData[] = [];
  dataListReplace3: SocketData[] = [];
  dataListReplace4: SocketData[] = [];
  dataListReplace5: SocketData[] = [];
  technewsDisplay:any = [];

  code: string = 'USDTRY';
  private subscriptions = new Subscription();
  public pingStatus = true;
  RETRY_SECONDS = 30;
  timer: any;
  interval: any;

  constructor(private renderer: Renderer2, private wsService: HomeProvider,private _services:NewsapiService) {}

  ngOnInit() {
    console.log(this.selectItems);

    this.interval = setInterval(() => {
      if (this.pingStatus === false) {
        this.subscriptions.unsubscribe();
        this.subscriptions = new Subscription();
        this.getData();
      }
    }, this.RETRY_SECONDS * 1000);
    this.getData();

    this._services.techNews().subscribe((result)=>{

      this.technewsDisplay = result.articles;
      console.log(result);
    });
  }

  getData() {
    this.wsService.initSocket();

    this.subscriptions.add(
      this.wsService.connectWebSocket().subscribe(
        (Sdata: SocketData[]) => {
          clearTimeout(this.timer);
          this.pingStatus = true;
          this.socketDataList = Sdata;
          this.filterData();
          this.timer = setTimeout(() => {
            this.pingStatus = false;
          }, 2000);
        },
        (err) => {
          this.pingStatus = true;
        },
        () => {
          this.pingStatus = false;
        }
      )
    );
  }

  trackByPrice(index: number, code: { Ask: any }) {
    return code.Ask;
  }

  filterData() {
    if (this.currencyList) {
      this.currencyList = [];
    }
    if (this.goldList) {
      this.goldList = [];
    }
    if (this.parityList) {
      this.parityList = [];
    }
    if (this.kriptoList) {
      this.kriptoList = [];
    }
    if (this.ziynetList) {
      this.ziynetList = [];
    }
    if (this.selectItems) {
      this.selectItems = [];
    }
    this.socketDataList.forEach((item, index) => {
      if (item.Category === CATEGORYTYPE.DOVIZ) {
        this.currencyList.push(item);
      } else if (item.Category === CATEGORYTYPE.KRIPTO) {
        this.kriptoList.push(item);
      } else if (item.Category === CATEGORYTYPE.PARITE) {
        this.parityList.push(item);
      } else if (item.Category === CATEGORYTYPE.ZIYNET) {
        this.ziynetList.push(item);
      } else if (item.Category === CATEGORYTYPE.METAL) {
        this.goldList.push(item);
      }
      else if (item.Category === CATEGORYTYPE.DOVIZ) {
        this.selectItems.push(item);
      }
    });
    if (this.dataListReplace1.length !== 0) {
      if (
        JSON.stringify(this.dataListReplace1) ===
        JSON.stringify(this.currencyList)
      ) {
      } else {
        this.currencyList.forEach((data, index) => {
          if (data.Ask !== this.dataListReplace1[index].Ask) {
            this.percentChange(data, this.dataListReplace1[index], index);
          } else {
            data.askPercentChange = 0.0;
            this.dataListReplace1[index].askPercentChange =
              data.askPercentChange;
          }
        });
      }
    } else {
      this.dataListReplace1 = this.currencyList;
    }
    if (this.dataListReplace2.length !== 0) {
      if (
        JSON.stringify(this.dataListReplace2) === JSON.stringify(this.goldList)
      ) {
      } else {
        this.goldList.forEach((data, index) => {
          if (data.Ask !== this.dataListReplace2[index].Ask) {
            this.percentChange(data, this.dataListReplace2[index], index);
          } else {
            if (data.askPercentChange) {
              this.dataListReplace2[index].askPercentChange =
                data.askPercentChange;
            } else {
              data.askPercentChange = 0.0;
              this.dataListReplace2[index].askPercentChange =
                data.askPercentChange;
            }
          }
        });
      }
    } else {
      this.dataListReplace2 = this.goldList;
    }
    if (this.dataListReplace3.length !== 0) {
      if (
        JSON.stringify(this.dataListReplace3) ===
        JSON.stringify(this.parityList)
      ) {
      } else {
        this.parityList.forEach((data, index) => {
          if (data.Ask !== this.dataListReplace3[index].Ask) {
            this.percentChange(data, this.dataListReplace3[index], index);
          } else {
            if (data.askPercentChange) {
              this.dataListReplace3[index].askPercentChange =
                data.askPercentChange;
            } else {
              data.askPercentChange = 0.0;
              this.dataListReplace3[index].askPercentChange =
                data.askPercentChange;
            }
          }
        });
      }
    } else {
      this.dataListReplace3 = this.parityList;
    }
    if (this.dataListReplace4.length !== 0) {
      if (
        JSON.stringify(this.dataListReplace4) ===
        JSON.stringify(this.kriptoList)
      ) {
      } else {
        this.kriptoList.forEach((data, index) => {
          if (data.Ask !== this.dataListReplace4[index].Ask) {
            this.percentChange(data, this.dataListReplace4[index], index);
          } else {
            if (data.askPercentChange) {
              this.dataListReplace4[index].askPercentChange =
                data.askPercentChange;
            } else {
              data.askPercentChange = 0.0;
              this.dataListReplace4[index].askPercentChange =
                data.askPercentChange;
            }
          }
        });
      }
    } else {
      this.dataListReplace4 = this.kriptoList;
    }
    if (this.dataListReplace5.length !== 0) {
      if (
        JSON.stringify(this.dataListReplace5) ===
        JSON.stringify(this.ziynetList)
      ) {
      } else {
        this.ziynetList.forEach((data, index) => {
          if (data.Ask !== this.dataListReplace5[index].Ask) {
            this.percentChange(data, this.dataListReplace5[index], index);
          } else {
            if (data.askPercentChange) {
              this.dataListReplace5[index].askPercentChange =
                data.askPercentChange;
            } else {
              data.askPercentChange = 0.0;
              this.dataListReplace5[index].askPercentChange =
                data.askPercentChange;
            }
          }
        });
      }
    } else {
      this.dataListReplace5 = this.ziynetList;
    }
  }

  /**
   * WS'den gelen fiyat farklılıklarını hesaplayan fonksiyon
   * @param newData
   * @param oldData
   */

  percentChange(newData: SocketData, oldData: SocketData, index: number) {
    if (newData.Ask != oldData.Ask) {
      let oldAskPrice = +oldData.Ask;
      let newAskPrice = +newData.Ask;
      let askPriceDifference = (1 - oldAskPrice / newAskPrice) * 100;
      newData.askPercentChange = +askPriceDifference.toFixed(2);
      newData.Time = Date.now();
      if (askPriceDifference < 0) {
        const code = newData.Code;
        const element = document.getElementById(code);
      } else if (askPriceDifference > 0) {
        const code = newData.Code;
        const element = document.getElementById(code);
      }
    }
  }

  resizeDiv(id: string) {
    this.isClicked = !this.isClicked;

    const element = document.getElementById(id);
    element!.style.height = '275px';
    if (!this.isClicked) {
      this.renderer.setStyle(element, 'max-height', '300px');
      element!.style.height = '275px';
    } else {
      this.renderer.setStyle(element, 'max-height', '550px');
      element!.style.height = '550px';
    }
  }

  toggle(socketData: SocketData) {
    this.code = socketData.Code;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }



}
