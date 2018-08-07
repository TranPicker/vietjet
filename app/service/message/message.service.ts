import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  deleteAll() {
    this.messages = [];
  }

  constructor() {
  }
}
