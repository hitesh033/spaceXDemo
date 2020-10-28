import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { HomeComponent } from './components/home/home.component';
import { DataFilterPipe } from './filters/data-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ProgramsComponent,
    HomeComponent,
    DataFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
