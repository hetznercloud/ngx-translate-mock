# NgxTranslateMock

This packages provides a mock module for [ngx-translate](https://github.com/ngx-translate/core).
It includes mocks for the `TranslateService`, the `TranslateDirective` and the `TranslatePipe`.
We have not mocked all methods of the service yet, feel free to open a pull-request.

## How to use

All you need to do is to import the module in your unittests.

```ts
imports: [TranslateMockModule],
```

### TranslateMockDirective, TranslateMockPipe

With this module you can also get reliable (snapshot) test results and check wether the translation string was correct or not.
For this the directive and pipe are transforming your string like this:

```html
<p>MY.TRANSLATION.STRING-i18n</p>
```

### TranslateServiceMock

The `TranslateServiceMock` acts similar to the real service. For example if you are using the
`use()` `onLangChange` emits the change or `get` returns a string similar to `MY_TRANSLATION_STRING-i18n`.

## License

MIT license
