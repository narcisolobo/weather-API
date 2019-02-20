import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  washington: any = {
    'current': '',
    'high': '',
    'low': '',
  }

  ngOnInit() {
    this.getWashington();
  }

  public getWashington() {
    this._httpService.washington().subscribe( data => {
      this.washington['current'] = data['main']['temp'];
      this.washington['high'] = data['main']['temp_max'];
      this.washington['low'] = data['main']['temp_min'];
    });
  }

}
