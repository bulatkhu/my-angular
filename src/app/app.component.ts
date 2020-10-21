import { Component } from '@angular/core';

export interface Card {
  title: string,
  text: string,
  images: Array<string>
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle = true
  cards: Card[] = [
    {title: 'Card 1', text: 'This is card number 1', images: ['https://angular.io/assets/images/logos/angular/angular.png']},
    {title: 'Card 2', text: 'This is card number 2', images: ['https://cdn2.auth0.com/blog/vuejs/logo.png']},
    {title: 'Card 3', text: 'This is card number 3', images: ['https://angular.io/assets/images/logos/angular/angular_solidBlack.svg']},
  ]


  toggleCards() {
    this.toggle = !this.toggle
  }

}
