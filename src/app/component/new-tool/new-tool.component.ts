import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/utils/services/newsapi.service';

@Component({
  selector: 'app-new-tool',
  templateUrl: './new-tool.component.html',
  styleUrls: ['./new-tool.component.scss']
})
export class NewToolComponent implements OnInit {

  constructor(private _services:NewsapiService) { }

  technewsDisplay:any = [];

  ngOnInit(): void {
    this._services.techNews().subscribe((result)=>{
      this.technewsDisplay = result.articles;
    });



  }
}
