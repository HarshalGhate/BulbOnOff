import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bulb';
  public OnImage="";
  public OffImage="";
  public Result="";
  BulbOn()
  {
    this.Result=this.OnImage="assets/Images/On.png";
  }
  BulbOff()
  {
    this.Result=this.OffImage="assets/Images/Off.png";
  }

  ngOnInit()
  {
    this.Result=this.OffImage="assets/Images/Off.png";
  }

}
