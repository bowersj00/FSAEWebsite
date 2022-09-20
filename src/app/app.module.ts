import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import { PowerchainComponent } from './powerchain/powerchain.component';
import { ElectionicsComponent } from './electionics/electionics.component';
import { AerodynamicsComponent } from './aerodynamics/aerodynamics.component';
import { BrakingComponent } from './braking/braking.component';
import { SuspensionComponent } from './suspension/suspension.component';
import { NewMembersComponent } from './new-members/new-members.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    PowerchainComponent,
    ElectionicsComponent,
    AerodynamicsComponent,
    BrakingComponent,
    SuspensionComponent,
    NewMembersComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
