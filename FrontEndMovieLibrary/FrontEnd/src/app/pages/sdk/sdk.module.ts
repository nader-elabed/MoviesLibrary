import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';
import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
  declarations: [PageHeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    PageHeaderComponent
  ]
})
export class SdkModule { }
