import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../service/restaurant.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurantList;


  constructor(private restaurantService: RestaurantService, private formBuilder: FormBuilder) {
  }


  ngOnInit() {

  }


  getRestaurantList() {
    this.restaurantService.getRestaurantList().subscribe(
      (response) => {
        console.log('resp :' + response);
        this.restaurantList = response;
      }, (err) => {
        console.log('erreur : ' + err);
      },
      () => {
        console.log('end');
      }
    );
  }

  deleteRestaurant(restaurantId/*:number*/) {
    this.restaurantService.deleteRestaurant(restaurantId).subscribe(
      (response) => {
        console.log('resp :' + response);
        /*this.restaurantList = response;*/
      }, (err) => {
        console.log('erreur : ' + err);
      },
      () => {
        console.log('finishing deleting restaurant');
        this.getRestaurantList();
      }
    );
  }


}
