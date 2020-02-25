import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {LoaderInterceptor} from '../core/interceptors/loader.interceptor';

import {AppComponent} from './containers/app/app.component';
import {LogoComponent} from './components/logo/logo.component';
import {NavComponent} from './components/nav/nav.component';
import {AppRoutingModule} from './app.routing-module';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
