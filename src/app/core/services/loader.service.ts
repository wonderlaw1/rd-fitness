import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loadingSubject: Subject<boolean> = new BehaviorSubject(false);
  loading: Observable<boolean> = this.loadingSubject.asObservable().pipe(
    shareReplay(1)
  );

  constructor() {
  }

  hide() {
    this.loadingSubject.next(false);
  }

  show() {
    this.loadingSubject.next(true);
  }
}
