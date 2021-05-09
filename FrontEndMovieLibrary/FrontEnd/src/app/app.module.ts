import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { SdkModule } from './pages/sdk/sdk.module';
import { PageMoviesService } from './pages/sdk/services/page-movies.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonLoadModule } from './pages/common/commonLoad.module';
import { MessageService, ConfirmationService } from '../../node_modules/primeng/api';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SdkModule,
    AppRoutingModule

  ],
  providers: [PageMoviesService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
