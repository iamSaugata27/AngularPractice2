import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: string = '';
  height: string = '';
  distance: number = 0;
  car = {
    manufacturer: 'TATA',
    model: 'Nexon',
    year: 2022
  }

  onNameChange(value: string) {
    this.name = value;
  }
  onDateChange(value: string) {
    this.date = value;
  }
  onCurrencyChange(value: string) {
    this.amount = value;
  }
  onHeightChange(value: string) {
    this.height = value;
  }
  onDistanceChange(value: number) {
    this.distance = value;
  }
}
