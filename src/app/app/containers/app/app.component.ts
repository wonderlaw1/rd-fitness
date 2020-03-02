import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {LoaderService} from '../../../core/services/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  isLoading$: Observable<boolean>;

  constructor(private loaderService: LoaderService,
              private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.isLoading$ = this.loaderService.loading;
  }
}
