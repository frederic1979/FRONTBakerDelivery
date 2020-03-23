import {Injectable} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) {
  }

  getRestaurantById(restaurantId) {
    return this.httpClient.get('http://localhost:8080/api/bakerdelivery/restaurants/' + restaurantId);
  }

  getRestaurantList() {
    return this.httpClient.get('http://localhost:8080/api/bakerdelivery/restaurants/');
  }


  deleteRestaurant(restaurantId) {
    return this.httpClient.delete('http://localhost:8080/api/bakerdelivery/restaurants/' + restaurantId);
  }


  addRestaurant(restaurant) {
    return this.httpClient.post('http://localhost:8080/api/bakerdelivery/restaurants/', restaurant);
  }


  setRestaurant(restaurantId, restaurant) {
    return this.httpClient.put('http://localhost:8080/api/bakerdelivery/restaurants/' + restaurantId, restaurant);
  }
}

