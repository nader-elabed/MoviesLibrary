
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';


import { SlideMenuModule } from 'primeng/slidemenu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
// palmyra-needle-angular-library-import Palmyra will add import angular library module here
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {  CalendarModule } from 'primeng/calendar';
import {  KeyFilterModule } from 'primeng/keyfilter';
import {  CheckboxModule } from 'primeng/checkbox';
import {  RadioButtonModule } from 'primeng/radiobutton';
import {  SliderModule } from 'primeng/slider';
import {  PasswordModule } from 'primeng/password';
import {  FileUploadModule } from 'primeng/fileupload';
import {  ToggleButtonModule } from 'primeng/togglebutton';
import {  PanelModule } from 'primeng/panel';
import {  TabViewModule } from 'primeng/tabview';
import {  DropdownModule } from 'primeng/dropdown';
import {  DialogModule } from 'primeng/dialog';
import {  PaginatorModule } from 'primeng/paginator';
import {  MultiSelectModule } from 'primeng/multiselect';
import {  AutoCompleteModule } from 'primeng/autocomplete';
import {  ConfirmDialogModule } from 'primeng/confirmdialog';
import {  FieldsetModule } from 'primeng/fieldset';
import {  SidebarModule } from 'primeng/sidebar';
import {  SelectButtonModule } from 'primeng/selectbutton';
import {  InputSwitchModule } from 'primeng/inputswitch';
import {  SplitButtonModule } from 'primeng/splitbutton';
import {  InputTextareaModule } from 'primeng/inputtextarea';
import {  MessageModule } from 'primeng/message';
import {  MenubarModule } from 'primeng/menubar';

import {  PanelMenuModule } from 'primeng/panelmenu';
import {  ContextMenuModule } from 'primeng/contextmenu';
import {  OverlayPanelModule } from 'primeng/overlaypanel';
import {  AccordionModule } from 'primeng/accordion';

import { TableModule } from 'primeng/table';
import { ConfirmationService } from 'primeng/api';



import { ChartModule } from 'primeng/chart';
import { LoadComponent } from './load/load.component';

import { ToastModule } from 'primeng/toast';

import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  imports: [
    CommonModule, ProgressSpinnerModule
  ], exports: [InputTextModule, ButtonModule, CalendarModule, KeyFilterModule,
    CheckboxModule, RadioButtonModule, SliderModule, PasswordModule, FileUploadModule,
    ToggleButtonModule, PanelModule, TabViewModule, DropdownModule, DialogModule, PaginatorModule,
    MultiSelectModule, TableModule, SidebarModule, AutoCompleteModule, FieldsetModule, SplitButtonModule,
    ConfirmDialogModule,  SelectButtonModule, InputSwitchModule, InputTextareaModule,
    MessageModule, MenubarModule, PanelMenuModule, ChartModule, ContextMenuModule,
    OverlayPanelModule, AccordionModule, ProgressSpinnerModule, LoadComponent, ToastModule, ToolbarModule],
  declarations: [LoadComponent]
})
export class CommonLoadModule { }
