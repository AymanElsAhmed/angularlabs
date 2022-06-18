import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigupComponent } from './sigup/sigup.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { CardComponent } from './card/card.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SigupComponent,
    NavComponent,
    HomeComponent,
    NotfoundComponent,
    CardComponent,
    BlogdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
