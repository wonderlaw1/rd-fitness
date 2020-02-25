import {Directive, Input, HostBinding} from '@angular/core';

enum CardType { VISA = 'visa', MASTERCARD = 'mastercard', UNKNOWN = 'unknown'}


@Directive({
  selector: '[appCCLogo]'
})
export class CreditCardLogoDirective {

  @HostBinding('src') imageSource;

  @Input() set cardNumber(cardNumber: string) {
    this.imageSource = 'assets/card-types/' + this.getCardTypeFromNumber(cardNumber) + '.png';
  }

  getCardTypeFromNumber(cardNumber: string): CardType {

    if (cardNumber.startsWith('4')) {
      return CardType.VISA;
    }

    if (cardNumber.startsWith('5')) {
      return CardType.MASTERCARD;
    }

    return CardType.UNKNOWN;
  }

}
