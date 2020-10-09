import { Injectable } from '@angular/core';
import { Credentials, LoginResponse, User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  APP_USRS = 'APP_USRS';
  isLoggedIn = false;
  constructor() {}

  registerUser(user: User): void {
    const users = localStorage.getItem(this.APP_USRS);
    if (!users) {
      const newUser = [{ ...user }];
      return localStorage.setItem(this.APP_USRS, JSON.stringify(newUser));
    }
    const parsedUsers = JSON.parse(users);
    parsedUsers.push(user);
    localStorage.setItem(this.APP_USRS, JSON.stringify(parsedUsers));
  }

  loginUser(credentials: Credentials): LoginResponse {
    const users = localStorage.getItem(this.APP_USRS);
    if (!users) return { isLoggedIn: false, message: 'El usuario no existe' };
    const parsedUsers = JSON.parse(users);
    const { email, password } = credentials;
    if (
      parsedUsers.find(
        (user) => user.email === email && user.password === password
      )
    ) {
      this.isLoggedIn = true;
      return { isLoggedIn: true, message: 'Bienvenido' };
    }
    return { isLoggedIn: false, message: 'Usuario o contraseña no validos' };
  }
}
