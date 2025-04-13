import {APP_INITIALIZER, ApplicationConfig} from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import {providePrimeNG} from "primeng/config";
import {CustomTheme} from "./shared/styles/theme";
import {TranslateService} from "./shared/services/translate/translate.service";
import {RegisterService} from "./services/register/register.service";

export function loadTranslationsFactory(translationService: TranslateService) {
  return () => translationService.loadTranslations().pipe();
}

export function loadConfigTable(loadConfigTable: RegisterService) {
  return () => loadConfigTable.loadModelRegister().pipe();
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: loadTranslationsFactory,
      deps: [TranslateService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfigTable,
      deps: [RegisterService],
      multi: true
    },
    providePrimeNG({
      theme: {
        preset: CustomTheme,
        options: {
          prefix: 'p',
          darkModeSelector: true,
          cssLayer: false,
          ripple: true,
          dark: true,
        }
      }
    })
  ]
};
