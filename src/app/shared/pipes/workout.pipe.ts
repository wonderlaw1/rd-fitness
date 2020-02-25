import { Pipe, PipeTransform } from '@angular/core';
import {Workout} from '../../core/models/workout.model';


@Pipe({
  name: 'workout'
})
export class WorkoutPipe implements PipeTransform {

  transform(value: Workout): string {
    if (value.type === 'endurance') {
      return `Distance: ${value.endurance.distance} km, Duration: ${value.endurance.duration} min`;
    }
    return `
      Weight: ${value.strength.weight} kg,
      Reps: ${value.strength.reps},
      Sets: ${value.strength.sets}
    `;
  }
}
