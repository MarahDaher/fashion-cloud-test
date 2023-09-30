import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { LoaderModule } from './shared/components/loader/loader.module';
import { HttpInterceptorModule } from './shared/interceptores/http-interceptors.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpInterceptorModule,
    LoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
