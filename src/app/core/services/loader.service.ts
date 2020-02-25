import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loading = new Subject<boolean>();
  isLoading: Observable<boolean> = this.loading.asObservable();

  show() {
    this.loading.next(true);
  }

  hide() {
    this.loading.next(false);
  }
}
