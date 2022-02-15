import { Pipe, PipeTransform } from '@angular/core';
import { TRANSLATED_STRING } from './util';

@Pipe({ name: 'translate' })
export class TranslateMockPipe implements PipeTransform {
    transform(text: string): string {
        return !text ? TRANSLATED_STRING : `${text}-${TRANSLATED_STRING}`;
    }
}
