import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../service/restaurant.service';
import {CommandService} from '../service/command.service';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandListComponent implements OnInit {

  constructor(private commandService: CommandService) {
  }

  commandList;

  ngOnInit() {
  }

  getCommandList() {
    this.commandService.getCommandList().subscribe(
      (response) => {
        console.log('resp :' + response);
        this.commandList = response;
      }, (err) => {
        console.log('erreur : ' + err);
      },
      () => {
        console.log('end');
      }
    );
  }

  deleteCommand(commandId/*:number*/) {
    this.commandService.deleteCommand(commandId).subscribe(
      (response) => {
        console.log('resp :' + response);
        /*this.restaurantList = response;*/
      }, (err) => {
        console.log('erreur : ' + err);
      },
      () => {
        console.log('finishing deleting command');
        this.getCommandList();
      }
    );
  }

}
