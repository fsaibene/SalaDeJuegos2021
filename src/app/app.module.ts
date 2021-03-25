import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { drawableModuleComponents } from './modules/app-components.modules';
import { AngularMaterialModule } from './modules/angular-material.modules';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { firebaseConfig } from './firebase-config/firebase-config';
import { AngularFireModule } from '@angular/fire';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    drawableModuleComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
