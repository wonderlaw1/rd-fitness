import { Component, OnInit } from '@angular/core';
import {MealsService} from '../../services/meals.service';
import {map, switchMap, tap, filter} from 'rxjs/operators';
import {Meal} from '../../../core/models/meal.model';
import {fromEvent, Subject} from 'rxjs';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
  providers: [MealsService]
})
export class MealsComponent implements OnInit {

  meals: Meal[];

  constructor(private mealsService: MealsService) { }

  ngOnInit(): void {
    this.mealsService.getMeals().pipe(
      tap(data => this.meals = data)
    ).subscribe();

    const subject = new Subject<number>();
    const subject$ = subject.asObservable();

    const sub1 = subject$.subscribe((data) => console.log(data));
    const sub2 = subject$.subscribe((data) => console.log(data));

    fromEvent(document.body, 'click').pipe(
      map((x: MouseEvent) => x.clientX),
      filter(x => x % 5 === 0),
      tap(x => x),
      tap(x => console.log(x))
    ).subscribe();

    document.body.addEventListener('click', () => {
      console.log('native click');
    });
  }

  handleDelete(id: number) {
    this.mealsService.deleteMeal(id).pipe(
      switchMap(() => this.mealsService.getMeals()),
      tap(data => this.meals = data)
    ).subscribe();
  }

}
