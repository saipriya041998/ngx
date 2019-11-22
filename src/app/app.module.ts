import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DemocorComponent } from './democor/democor.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { approuting } from './app.routing';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ShopComponent } from './shop/shop.component';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AlertModule } from 'ngx-bootstrap/alert';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SignupComponent } from './signup/signup.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ProductresComponent } from './productres/productres.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SideComponent } from './side/side.component';
import { CollapseModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DemocorComponent,
    MainComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    LoginComponent,
    ShopComponent,
    SignupComponent,
    ProductresComponent,
    SideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    approuting,
    HttpClientModule,
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    SortableModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    RatingModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ProgressbarModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
