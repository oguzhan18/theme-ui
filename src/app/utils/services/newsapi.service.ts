import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=0add4753f7b54ecf89300cf982152cdb"


  technewsApiUrl = "https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=0add4753f7b54ecf89300cf982152cdb"


  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=0add4753f7b54ecf89300cf982152cdb"

  //topheading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  techNews():Observable<any>
  {
    return this._http.get(this.technewsApiUrl);
  }

  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }
}
