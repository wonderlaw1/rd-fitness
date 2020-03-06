import {TestBed, async, inject, ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import {LoaderService} from '../../../core/services/loader.service';


fdescribe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        LoaderService
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('Loader should be visible', inject([LoaderService], async (injectService: LoaderService) => {
    injectService.show();

    await fixture.whenStable().then(() => {
      fixture.detectChanges();
      const appLoader = fixture.debugElement.query(By.css('app-loader'));
      expect(appLoader).toBeTruthy();
    });
  }));

  it(`Loader should be visible`, inject([LoaderService], async (injectService: LoaderService) => {
    injectService.hide();

    await fixture.whenStable().then(() => {
      fixture.detectChanges();
      const appLoader = fixture.debugElement.query(By.css('app-loader'));
      expect(appLoader).toBeFalsy();
    });
  }));
});
