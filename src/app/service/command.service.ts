import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Command} from '@angular/cli/models/command';

@Injectable({
  providedIn: 'root'
})
export class CommandService {


  constructor(private httpClient: HttpClient) {
  }

  getCommandById(commandId) {
    return this.httpClient.get('http://localhost:8080/api/bakerdelivery/commands/' + commandId);
  }

  getCommandList() {
    return this.httpClient.get('http://localhost:8080/api/bakerdelivery/commands/');
  }


  deleteCommand(commandId) {
    return this.httpClient.delete('http://localhost:8080/api/bakerdelivery/commands/' + commandId);
  }


  addCommand(command) {
    return this.httpClient.post('http://localhost:8080/api/bakerdelivery/commands/', command);
  }


  setCommand(commandId, command) {
    return this.httpClient.put('http://localhost:8080/api/bakerdelivery/commands/' + commandId, command);
  }


}
