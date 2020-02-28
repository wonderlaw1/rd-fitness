export interface Workout {
  id: number;
  name: string;
  type: 'endurance' | 'strength';
  strength?: Strength;
  endurance?: Endurance;
}

interface Strength {
  reps: number;
  sets: number;
  weight: number;
}

interface Endurance {
  distance: number;
  duration: number;
}
