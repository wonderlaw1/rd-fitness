import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {LoaderService} from '../../../core/services/loader.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  isLoading$: Observable<boolean> = this.loaderService.loading;

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit() {
  }
}
