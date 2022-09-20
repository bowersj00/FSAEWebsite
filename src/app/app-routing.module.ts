import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {PowerchainComponent} from "./powerchain/powerchain.component";
import {ElectronicsComponent} from "./electronics/electronics.component";
import {AerodynamicsComponent} from "./aerodynamics/aerodynamics.component";
import {BrakingComponent} from "./braking/braking.component";
import {SuspensionComponent} from "./suspension/suspension.component";
import {NewMembersComponent} from "./new-members/new-members.component";
import {GalleryComponent} from "./gallery/gallery.component";

const routes: Routes = [
  {path:'', redirectTo:'/landing', pathMatch:'full'},
  {path:'landing', component: LandingComponent},
  {path:'powertrain&drivetrain', component: PowerchainComponent},
  {path:'electronics', component: ElectronicsComponent},
  {path:'aerodynamics', component: AerodynamicsComponent},
  {path:'braking&controls', component: BrakingComponent},
  {path:'suspension', component: SuspensionComponent},
  {path:'newMembers', component: NewMembersComponent},
  {path:'gallery', component: GalleryComponent},
  {path:'**', redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
