import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
=======
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 8b440da961cd198999fe3886890b734974018d09

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
<<<<<<< HEAD
import { PalestranteComponent } from './palestrante/palestrante.component';

import { NavComponent } from './nav/nav.component';

//import { BrowserAnimationModule } form '@angular/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

=======
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { NavComponent } from './nav/nav.component';

>>>>>>> 8b440da961cd198999fe3886890b734974018d09
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [		
    AppComponent,
    EventosComponent,
<<<<<<< HEAD
    PalestranteComponent,
=======
    PalestrantesComponent,
>>>>>>> 8b440da961cd198999fe3886890b734974018d09
    NavComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    CollapseModule.forRoot(),// usar a referencia do httpClient para injetar no construtor
    FormsModule, 
=======
    CollapseModule.forRoot(),
    FormsModule
>>>>>>> 8b440da961cd198999fe3886890b734974018d09
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
