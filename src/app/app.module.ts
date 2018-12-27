import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DownloadUrlService } from './home/ass.service';
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
  { path: 'ass', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    DownloadUrlService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
