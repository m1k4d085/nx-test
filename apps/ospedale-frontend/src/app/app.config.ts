import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFormlyCore } from '@ngx-formly/core';
import { appRoutes } from './app.routes';
import { ApiModule, Configuration, ConfigurationParameters } from '@ospedale/API';
import { FormlyBuilder } from '@ospedale/formly';

function APIConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: 'http://localhost:4200',
  };
  return new Configuration(params);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideFormlyCore(
      FormlyBuilder
      .create()
      //altre opzioni di configurazione
      .build()
    ),
    importProvidersFrom(ApiModule.forRoot(APIConfigFactory)),
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes)
  ],
};
