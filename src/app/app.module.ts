import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KoliBriModule } from '@public-ui/angular';
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { register } from '@public-ui/core';
import { BMF } from '@public-ui/themes';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, KoliBriModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    register(BMF, defineCustomElements);
  }
}
