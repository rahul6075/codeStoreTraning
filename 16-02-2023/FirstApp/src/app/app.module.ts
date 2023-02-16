import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { AuthScreenComponent } from './screens/auth-screen/auth-screen.component';
import { MenuScreenComponent } from './screens/menu-screen/menu-screen.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { HeaderComponent } from './componenets/header/header.component';
import { HeroComponent } from './componenets/hero/hero.component';
import { ServicesComponent } from './componenets/services/services.component';
import { ServiceCardComponent } from './componenets/service-card/service-card.component';
import { MenuCardComponent } from './componenets/menu-card/menu-card.component';
import { ContactSectionComponent } from './componenets/contact-section/contact-section.component';
import { FooterComponent } from './componenets/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    AuthScreenComponent,
    MenuScreenComponent,
    DashboardComponent,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    ServiceCardComponent,
    MenuCardComponent,
    ContactSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
