import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {LoaderService} from '../../../core/services/loader.service';
import {By} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

fdescribe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [LoaderService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should show loader on isLoading$ = true', async () => {
    const loaderService = TestBed.inject(LoaderService);
    loaderService.show();

    fixture.detectChanges();
    const loaderEl = fixture.debugElement.query(By.css('app-loader'));
    expect(loaderEl).toBeTruthy();
  });

  it('should hide loader on isLoading$ = false', async () => {
    const loaderService = TestBed.inject(LoaderService);
    loaderService.hide();

    fixture.detectChanges();
    const loaderEl = fixture.debugElement.query(By.css('app-loader'));
    expect(loaderEl).toBeFalsy();
  });
});
