import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {RestaurantService} from '../service/restaurant.service';
import {ActivatedRoute} from '@angular/router';
import {Restaurant} from '../restaurant';

@Component({
  selector: 'app-restaurant-modification',
  templateUrl: './restaurant-modification.component.html',
  styleUrls: ['./restaurant-modification.component.css']
})
export class RestaurantModificationComponent implements OnInit {


  constructor(private restaurantService: RestaurantService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
  }

  /*on créé un instance de la classe restaurant*/
  newRestaurant = new Restaurant();

  restaurantForm = this.formBuilder.group({
    name: '',
    email: '',
    adressePost: ''

  });

  restaurantId;

  ngOnInit() {
    /*pour sortir la variable contenu dans l'url*/

    this.restaurantId = this.route.snapshot.paramMap.get('restaurantId');
    console.log('le restau id de l url est :' + this.restaurantId);
  }

  updateRestaurant(restaurantId, restaurantForm) {

    this.newRestaurant.name = restaurantForm.name;
    this.newRestaurant.email = restaurantForm.email;
    this.newRestaurant.adressePost = restaurantForm.addressePost;

    this.restaurantService.setRestaurant(restaurantId, this.newRestaurant).subscribe(
      (response) => {
        console.log('resp :' + response);
        /*this.restaurantList = response;*/
      }, (err) => {
        console.log('erreur : ' + err);
      },
      () => {
        console.log('finishing editing restaurant');

      }
    );
  }


}
