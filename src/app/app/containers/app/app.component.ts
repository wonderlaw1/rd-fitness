import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {LoaderService} from '../../../core/services/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  isLoading$: Observable<boolean> = this.loaderService.loading;

  constructor(private loaderService: LoaderService) {
  }

}
