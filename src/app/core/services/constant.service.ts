import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  AppTaskManager =  { App: 'TaskManager', Ver: '1.0', API_URL: 'http://...' };

  constructor() { }
}
