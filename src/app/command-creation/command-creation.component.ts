import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../service/restaurant.service';
import {FormBuilder} from '@angular/forms';
import {CommandService} from '../service/command.service';

@Component({
  selector: 'app-command-creation',
  templateUrl: './command-creation.component.html',
  styleUrls: ['./command-creation.component.css']
})
export class CommandCreationComponent implements OnInit {

  constructor(private commandService: CommandService, private formBuilder: FormBuilder) {
  }

  newCommand;

  commandForm = this.formBuilder.group({
    quantity: '',
    date: '',
    restaurantId: ''

  });

  ngOnInit() {
  }

  postCommand(commandForm) {
/*    this.newCommand.quantity = command.quantity;
    this.newCommand.date = command.date;
    this.newCommand.restaurantId = command.restaurantId;*/

    this.commandService.addCommand(commandForm).subscribe(
      (response) => {
        console.log('resp :' + response);
        /*this.restaurantList = response;*/
      }, (err) => {
        console.log('erreur : ' + err);
      },
      () => {
        console.log('finishing posting command');

      }
    );
  }


}
