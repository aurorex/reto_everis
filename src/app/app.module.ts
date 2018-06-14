import { BrowserModule } from '@angular/platform-browser';
// Rutas 
import { RouterModule, Route } from '@angular/router'

import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'

// firebase
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

// Components
import { ProductsComponent } from './components/publication/item.component';
import { ProductListComponent } from './components/publication/public-list/product-list.component';
import { ProductComponent } from './components/publication/publications/product.component';

// Services 
import { ProductService } from './services/project.service';
import { HomeComponent } from './singlepage/home/home.component';
import { LoginComponent } from './singlepage/login/login.component';
import { RegisterComponent } from './singlepage/register/register.component'
import { NotfoundComponent } from './singlepage/notfound/notfound.component';
import { HeaderComponent } from './singlepage/header/header.component';
import { SidemenuComponent } from './singlepage/sidemenu/sidemenu.component';
// import { Route } from '@angular/compiler/src/core';

const routeConfig:Route[] = [
  {
    path:'',
    component:HomeComponent
  },
   {
     path:'login',
     component:LoginComponent
   },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'**',
    component:NotfoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    HeaderComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
