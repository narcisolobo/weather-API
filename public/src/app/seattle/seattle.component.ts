import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  seattle: any = {
    'current': '',
    'high': '',
    'low': '',
  }

  ngOnInit() {
    this.getSeattle();
  }

  public getSeattle() {
    this._httpService.seattle().subscribe( data => {
      this.seattle['current'] = data['main']['temp'];
      this.seattle['high'] = data['main']['temp_max'];
      this.seattle['low'] = data['main']['temp_min'];
    });
  }

}
