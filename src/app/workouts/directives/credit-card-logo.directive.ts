import {Directive, HostBinding, HostListener, Input} from '@angular/core';

enum CardType {
  VISA = 'visa',
  MASTERCARD = 'mastercard',
  UNKNOWN = 'unknown'
}


@Directive({
  selector: '[appCreditCardLogo]'
})
export class CreditCardLogoDirective {

  @HostBinding('src') imageSrc: string;

  @HostListener('click') handleClick() {
    console.log('directive click');
  }

  @Input() set cardNumber(cardNumber: string) {
    this.imageSrc = `assets/card-types/${this.getCardType(cardNumber)}.png`;
  }

  constructor() {
  }

  private getCardType(cardNumber: string): CardType {
    if (cardNumber.startsWith('4')) {
      return CardType.VISA;
    }
    if (cardNumber.startsWith('5')) {
      return CardType.MASTERCARD;
    }
    return CardType.UNKNOWN;
  }

}
