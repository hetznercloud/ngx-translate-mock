import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { LangChangeEvent } from '@ngx-translate/core';
import { TRANSLATED_STRING } from './util';

@Injectable()
export class TranslateServiceMock {
    onLangChangeSubject: Subject<LangChangeEvent> = new Subject();
    onTranslationChangeSubject: Subject<string> = new Subject();
    onDefaultLangChangeSubject: Subject<string> = new Subject();
    isLoadedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        true
    );

    onLangChange: Observable<LangChangeEvent> =
        this.onLangChangeSubject.asObservable();
    onTranslationChange: Observable<string> =
        this.onTranslationChangeSubject.asObservable();
    onDefaultLangChange: Observable<string> =
        this.onDefaultLangChangeSubject.asObservable();
    isLoaded: Observable<boolean> = this.isLoadedSubject.asObservable();

    currentLang!: string;

    languages: string[] = ['de'];

    get(content: string): Observable<string> {
        return of(TRANSLATED_STRING + content);
    }

    use(lang: string): void {
        this.currentLang = lang;
        this.onLangChangeSubject.next({ lang } as LangChangeEvent);
    }

    addLangs(langs: string[]): void {
        this.languages = [...this.languages, ...langs];
    }

    getBrowserLang(): string {
        return '';
    }

    getLangs(): string[] {
        return this.languages;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getTranslation(): Observable<any> {
        return of({});
    }

    instant(key: string | string[], interpolateParams?: object): string {
        return TRANSLATED_STRING + key.toString();
    }

    setDefaultLang(lang: string): void {
        this.onDefaultLangChangeSubject.next(lang);
    }
}
