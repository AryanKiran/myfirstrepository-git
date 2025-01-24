import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { AddFlightComponent } from './components/add-flight/add-flight.component';
import { ManageBookingComponent } from './components/manage-booking/manage-booking.component';
import { MyHistoryComponent } from './components/my-history/my-history.component';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'add-flight/:id',component:AddFlightComponent},
  {path:'add-flight',component:AddFlightComponent},
  {path:'flight-list',component:FlightListComponent},
  {path:'manage-booking',component:ManageBookingComponent},
  {path:'my-history',component:MyHistoryComponent},
  {path:'book-form/:id',component:BookingFormComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'error',component:ErrorComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
