# NgxTranslateMock

[![npm version](https://badge.fury.io/js/@hetznercloud%2Fngx-translate-mock.svg)](https://badge.fury.io/js/@hetznercloud%2Fngx-translate-mock)

This packages provides a mock module for [ngx-translate](https://github.com/ngx-translate/core).
It includes mocks for the `TranslateService`, the `TranslateDirective` and the `TranslatePipe`.
Not all methods of the service have been mocked yet, feel free to open a pull-request.

## How to use

Import the module in your `TestBed` testing module.

```ts
import { TestBed } from '@angular/core/testing';
import { TranslateMockModule } from '@hetznercloud/ngx-translate-mock';

TestBed.configureTestingModule({
  imports: [TranslateMockModule],
});
```

### TranslateMockDirective, TranslateMockPipe

With this module you can also get reliable (snapshot) test results and check whether the translation string was correct or not.
To do this the directive and pipe append `-i18n` to the translation string:

```html
<p>MY.TRANSLATION.STRING-i18n</p>
```

### TranslateServiceMock

The `TranslateServiceMock` acts similar to the real service. For example,
`use()` emits `onLangChange`, or `get` returns the passed in translation string with `-i18n` appended.

## License

MIT license
