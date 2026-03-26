import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { ApiModule, Configuration, ConfigurationParameters } from '@ospedale/API';

function APIConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: 'http://localhost:4200',
  };
  return new Configuration(params);
}

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(ApiModule.forRoot(APIConfigFactory)),
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes)
  ],
};
