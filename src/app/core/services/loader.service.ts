import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loadingSubject: Subject<boolean> = new BehaviorSubject(false);
  loading: Observable<boolean> = this.loadingSubject.asObservable();

  constructor() {
  }

  hide() {
    this.loadingSubject.next(false);
  }

  show() {
    this.loadingSubject.next(true);
  }
}
