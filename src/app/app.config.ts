import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import {providePrimeNG} from "primeng/config";
import {CustomTheme} from "./shared/styles/theme";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(),
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
