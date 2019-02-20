import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  sanjose: any = {
    'current': '',
    'high': '',
    'low': '',
  }

  ngOnInit() {
    this.getSanjose();
  }

  public getSanjose() {
    this._httpService.sanjose().subscribe( data => {
      this.sanjose['current'] = data['main']['temp'];
      this.sanjose['high'] = data['main']['temp_max'];
      this.sanjose['low'] = data['main']['temp_min'];
    });
  }

}
