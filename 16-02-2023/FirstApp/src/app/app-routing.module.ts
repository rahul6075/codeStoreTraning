import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthScreenComponent } from './screens/auth-screen/auth-screen.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { MenuScreenComponent } from './screens/menu-screen/menu-screen.component';
const appRoutes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'login', component: AuthScreenComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'menu', component: MenuScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
