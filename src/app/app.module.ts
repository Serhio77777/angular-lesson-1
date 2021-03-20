import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { TestComponent } from './components/test/test.component';
import { ChildComponent } from './components/home/child/child.component';
import { ChildTestComponent } from './components/test/child/child.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// services
import { TestService } from './services/test.service';
import { TriggerComponent } from './components/test/trigger/trigger.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    ChildComponent,
    ChildTestComponent,
    PageNotFoundComponent,
    TriggerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (

  ) {

  }
}
