import { Injectable } from '@angular/core';
import { User } from '../interface/config-model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  config: User;

  constructor() { }

  setConfig(user: User): void {
    this.config = new User(user);
  }

  getConfig(): User {
    return this.config;
  }
}
