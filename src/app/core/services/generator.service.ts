import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  //n из набора a-z, A-Z, 0-9

  constructor() { }

  generate(n: number): string {
    let result = '';
    const line = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < n; i++) {
      result += line.charAt(Math.floor(Math.random() * line.length));
    }
    return result;
  }
}
