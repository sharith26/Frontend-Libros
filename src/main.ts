import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { AppComponent } from '../app'; // Un solo punto (./) porque main.ts está en src/

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));