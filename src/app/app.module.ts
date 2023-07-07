import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectComponent } from './project/project.component';
import { ServicesComponent } from './services/services.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { BusinessContactsComponent } from './business-contacts/business-contacts.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ProjectComponent,
    ServicesComponent,
    ContactmeComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    BusinessContactsComponent,
    UpdateContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
