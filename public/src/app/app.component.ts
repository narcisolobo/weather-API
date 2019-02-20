import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit  {
  
  public constructor( private titleService: Title ) { }

    chicago: any = {
      'current': '',
      'high': '',
      'low': '',
    }

    ngOnInit(){
      this.setTitle('Dojo Weather API');
    }
  
    public setTitle( newTitle: string) {
      this.titleService.setTitle( newTitle );
    }

}
