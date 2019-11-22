import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductresComponent } from './productres/productres.component';
import { ResolverService } from './services/resolver.service';
import { SideComponent } from './side/side.component';


const arr:Routes=[
  { path:'', component:HomeComponent},
  { path:'about',component:AboutusComponent},
  { path:'contact',component:ContactComponent},
  { path:'shop',component:ShopComponent},
  { path:'login',component:LoginComponent},
  { path:'signup',component:SignupComponent},
  { path:'prores',resolve:{pdata:ResolverService},component:ProductresComponent},
  { path:'side',component:SideComponent}

];

export const approuting = RouterModule.forRoot(arr);
