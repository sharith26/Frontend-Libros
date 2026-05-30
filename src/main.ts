import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app'; // Asegúrate que aquí diga AppComponent
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig) // Y aquí también
  .catch((err) => console.error(err));