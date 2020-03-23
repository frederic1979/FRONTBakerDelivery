import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestaurantService} from '../service/restaurant.service';
import {FormBuilder} from '@angular/forms';
import {Command} from '../command';
import {CommandService} from '../service/command.service';

@Component({
  selector: 'app-command-modification',
  templateUrl: './command-modification.component.html',
  styleUrls: ['./command-modification.component.css']
})
export class CommandModificationComponent implements OnInit {

  constructor(private commandService: CommandService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
  }

  commandId;
  newCommand = new Command();

  commandForm = this.formBuilder.group({
    quantity: '',
    date: '',
    restaurantId: ''
  });


  ngOnInit() {
    this.commandId = this.route.snapshot.paramMap.get('commandId');
  }


  updateCommand(commandId, commandForm) {
    this.newCommand.quantity = commandForm.quantity;
    this.newCommand.date = commandForm.date;
    this.newCommand.restaurantId = commandForm.restaurantId;

    this.commandService.setCommand(commandId, this.newCommand).subscribe(
      (response) => {
        console.log('resp :' + response);

      }, (err) => {
        console.log('erreur : ' + err);
      },
      () => {
        console.log('finishing editing command');

      }
    );
  }



}
