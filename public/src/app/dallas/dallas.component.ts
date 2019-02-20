import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  dallas: any = {
    'current': '',
    'high': '',
    'low': '',
  }

  ngOnInit() {
    this.getDallas();
  }

  public getDallas() {
    this._httpService.dallas().subscribe( data => {
      this.dallas['current'] = data['main']['temp'];
      this.dallas['high'] = data['main']['temp_max'];
      this.dallas['low'] = data['main']['temp_min'];
    });
  }

}
