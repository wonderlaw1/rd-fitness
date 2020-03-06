import { CreditCardLogoDirective } from './credit-card-logo.directive';
import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
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
  let imgEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgCardLogoComponent, CreditCardLogoDirective]
    });
    fixture = TestBed.createComponent(ImgCardLogoComponent);
    component = fixture.componentInstance;
    imgEl = fixture.debugElement.query(By.directive(CreditCardLogoDirective));
    fixture.detectChanges();
  });

  it('should be visa img displayed', () => {
    component.directive.cardNumber = '4';
    fixture.detectChanges();
    expect(component.directive.imageSrc).toBe('assets/card-types/visa.png');
  });
});
