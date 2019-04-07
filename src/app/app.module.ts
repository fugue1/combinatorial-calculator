import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FactorsComponent } from './factors/factors.component';
import { PermComponent } from './perm/perm.component';
import { CombComponent } from './comb/comb.component';


import { Unique, Comp, DispArr } from './app.pipe'

import { NatNum } from './factors/factors.model';
import { Perm } from './perm/perm.model';
import { Comb } from './comb/comb.model';

@NgModule({
  declarations: [
    AppComponent,
    FactorsComponent,
    PermComponent,
    CombComponent,
    Unique,
    Comp,
    DispArr,
  ],
  imports: [
    BrowserModule,
    //FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
