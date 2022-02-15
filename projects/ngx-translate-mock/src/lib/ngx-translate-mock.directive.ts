import { AfterViewChecked, Directive, ElementRef, Input } from '@angular/core';
import { TRANSLATED_STRING } from './util';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[translate]',
})
/* eslint-disable @typescript-eslint/no-explicit-any */
export class TranslateMockDirective implements AfterViewChecked {
    @Input()
    translateParams: any;
    constructor(private readonly _element: ElementRef) {}

    ngAfterViewChecked(): void {
        this._element.nativeElement.innerText += TRANSLATED_STRING;
    }
}
