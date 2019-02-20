import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  chicago: any = {
    'current': '',
    'high': '',
    'low': '',
  }

  ngOnInit() {
    this.getChicago();
  }

  public getChicago() {
    this._httpService.chicago().subscribe( data => {
      this.chicago['current'] = data['main']['temp'];
      this.chicago['high'] = data['main']['temp_max'];
      this.chicago['low'] = data['main']['temp_min'];
    });
  }

}
