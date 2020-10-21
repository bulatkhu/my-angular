import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  // interpolation: ['..', '..']
})

// or
//
//
// @Component({
//   selector: 'app-card',
//   template: `
//     <div class="card">
//       <h2>Card component</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
//     </div>
//   `,
//   styles: [
//     `
//       .card {
//         padding: .5rem 1rem;
//         border: 1px dashed #626262;
//         margin-bottom: 1rem ;
//       }
//       h2 {
//         margin-bottom: .5rem;
//       }
//     `
//   ]
// })

export class CardComponent implements OnInit {

  @Input() card: Card
  @Input() index: number

  title: string = 'My Card Title'
  disabled: boolean = false
  textColor: string
  currentImg: number = 0

  cardDate: Date = new Date()


  imagesHandler(type: string) {
    if (type == 'next') {
      if (this.currentImg !== this.card.images.length - 1) {
        this.currentImg = this.currentImg + 1
      } else {
        this.currentImg = 0
      }
    } else if (type == 'prev') {
      if (this.currentImg !== 0) {
        this.currentImg = this.currentImg - 1
      } else {
        this.currentImg = this.card.images.length - 1
      }
    }
  }

  ngOnInit() {
    console.log('Component was initialized')
  }

  inputHandler(value: any) {
    this.card.title = value
  }

  changeHandler(event) {
    console.log(this.card.title, event)
  }



  getInfo(): string {
    return 'This is my info'
  }

  onDisabled() {
    this.disabled = !this.disabled
  }
}
