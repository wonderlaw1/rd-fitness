import { CreditCardLogoDirective } from './credit-card-logo.directive';
import {Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ListItemComponent} from '../../shared/components/list-item/list-item.component';
import {JoinPipe} from '../../shared/pipes/join.pipe';
import {By} from '@angular/platform-browser';

@Component({
  template: `<img appCreditCardLogo>`
})
class ImgCardLogoComponent {
  @ViewChild(CreditCardLogoDirective) directive: CreditCardLogoDirective;
}

fdescribe('CreditCardLogoDirective', () => {
  let component: ImgCardLogoComponent;
  let fixture: ComponentFixture<ImgCardLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreditCardLogoDirective, ImgCardLogoComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ImgCardLogoComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('should create an instance', () => {
    const directive = new CreditCardLogoDirective();
    expect(directive).toBeTruthy();
  });

  it('should be VISA img displayed', () => {
    component.directive.cardNumber = '4';
    fixture.detectChanges();
    const imgEl = fixture.debugElement.query(By.directive(CreditCardLogoDirective));
    expect(imgEl.properties.src).toBe('assets/card-types/visa.png');
  });
});
