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
import { LoguinComponent } from './singlepage/loguin/loguin.component';
import { RegisterComponent } from './singlepage/register/register.component'
// import { Route } from '@angular/compiler/src/core';

const routeConfig:Route[] = [
 
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    HomeComponent,
    LoguinComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
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
