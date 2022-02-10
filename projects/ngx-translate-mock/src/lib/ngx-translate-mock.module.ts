/**
 * Copyright (c) 2022 Hetzner Cloud GmbH
 *
 * SPDX-License-Identifier: MIT
 */

import { ClassProvider, NgModule } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateServiceMock } from './ngx-translate-mock.service';
import { TranslateMockDirective } from './ngx-translate-mock.directive';
import { TranslateMockPipe } from './ngx-translate-mock.pipe';

export const TRANSLATE_SERVICE_MOCK: ClassProvider = {
    provide: TranslateService,
    useClass: TranslateServiceMock,
};

@NgModule({
    declarations: [TranslateMockPipe, TranslateMockDirective],
    exports: [TranslateMockPipe, TranslateMockDirective],
    providers: [TRANSLATE_SERVICE_MOCK],
})
export class TranslateMockModule {}
