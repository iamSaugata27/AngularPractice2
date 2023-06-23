import { Component, NgModule } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredTxt = '';

  onInput(value: string) {
    this.enteredTxt = value;
  }

  compareLetter(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter)
      return 'pending';
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
