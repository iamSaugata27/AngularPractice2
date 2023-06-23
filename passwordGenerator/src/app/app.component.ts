import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    console.log(parsedValue);
    if (!isNaN(parsedValue))
      this.length = parsedValue;
    else
      this.length = 0;
    this.password = '';
  }

  onButtonClick() {
    console.log("Include Letters ", this.includeLetters);
    console.log("Include Numbers ", this.includeNumbers);
    console.log("Include Symbols ", this.includeSymbols);

    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const symbols = "~!@#$%^&*()_[]{}<>?/";
    let validChars = '';

    if (this.includeLetters)
      validChars += letters;
    if (this.includeNumbers)
      validChars += numbers;
    if (this.includeSymbols)
      validChars += symbols;

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      let index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
