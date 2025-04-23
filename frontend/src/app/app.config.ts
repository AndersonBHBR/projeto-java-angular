import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// ADICIONE ISSO:
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),

    // E AQUI:
    importProvidersFrom(CommonModule, FormsModule)
  ]
};
