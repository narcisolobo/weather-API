import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  burbank: any = {
    'current': '',
    'high': '',
    'low': '',
  }

  ngOnInit() {
    this.getBurbank();
  }

  public getBurbank() {
    this._httpService.burbank().subscribe( data =>{
      this.burbank['current'] = data['main']['temp'];
      this.burbank['high'] = data['main']['temp_max'];
      this.burbank['low'] = data['main']['temp_min'];
      console.log(this.burbank);
    });
  }

}
