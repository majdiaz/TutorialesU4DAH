import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from '../models/user';

import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public islogged: any = false;
  constructor(public afAuth: AngularFireAuth, private afsAuth: AngularFireAuth) { 
    afAuth.authState.subscribe(user=> (this.islogged = user));
  }

  async onLogin(user:User){
    try{
      return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    }catch (error){
      console.log('Error en login', error);
    }
  }

  loginGoogleUser(){
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }


}
