import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // 💡 : Singleton ^^
  constructor() {
    const x = '😘🦄';
  }
}
