import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CommandListComponent } from './command-list/command-list.component';
import {RestaurantListComponent} from './restaurant-list/restaurant-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { RestaurantModificationComponent } from './restaurant-modification/restaurant-modification.component';
import { CommandModificationComponent } from './command-modification/command-modification.component';

import { CommandCreationComponent } from './command-creation/command-creation.component';
import {RestaurantCreationComponent} from './restaurant-creation/restaurant-creation.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    CommandListComponent,
    RestaurantCreationComponent,
    RestaurantModificationComponent,
    CommandModificationComponent,
    CommandCreationComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent },

      {path: 'creationResto', component: RestaurantCreationComponent},
      {path: 'creationCommand', component: CommandCreationComponent},
      {path: 'modificationResto/:restaurantId', component: RestaurantModificationComponent},
      {path: 'modificationCommand/:commandId', component: CommandModificationComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
