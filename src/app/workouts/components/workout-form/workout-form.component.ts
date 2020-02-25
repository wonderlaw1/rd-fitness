import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent implements OnInit {

  cardNumber = '';

  constructor() { }

  ngOnInit(): void {
  }

  onCardChange(cardNumber: string) {
    this.cardNumber = cardNumber;
  }

}
