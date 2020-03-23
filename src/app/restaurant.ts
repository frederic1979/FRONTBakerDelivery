export interface Irestaurant {
  id: number;
  name: string;
  email: string;
  adressePost: string;
}

export class Restaurant implements Irestaurant {
  id: number;
  name: string;
  email: string;
  adressePost: string;
}
