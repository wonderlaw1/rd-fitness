import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit {

  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
