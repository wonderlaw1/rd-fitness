import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent implements OnInit {

  cardNumber: string;

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(value: string): void {
    this.cardNumber = value;
  }

}
