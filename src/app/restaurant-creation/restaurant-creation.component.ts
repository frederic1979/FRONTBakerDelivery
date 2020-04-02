import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../service/restaurant.service';
import {FormBuilder} from '@angular/forms';
import {Restaurant} from '../restaurant';

@Component({
  selector: 'app-restaurant-creation',
  templateUrl: './restaurant-creation.component.html',
  styleUrls: ['./restaurant-creation.component.css']
})
export class RestaurantCreationComponent implements OnInit {

  constructor(private restaurantService: RestaurantService, private formBuilder: FormBuilder) {
  }

  /*à mettre avant le NgOnINit*/
  restaurantForm = this.formBuilder.group({
    name: '',
    email: '',
    adressePost: ''

  });


  ngOnInit() {

  }

  postRestaurant(restaurantForm) {

    this.restaurantService.addRestaurant(restaurantForm).subscribe(
      (response) => {
        console.log('resp :' + response);
        /*this.restaurantList = response;*/
      }, (err) => {
        console.log('erreur : ' + err);
      },
      () => {
        console.log('finishing posting restaurant');

      }
    );
  }
}
