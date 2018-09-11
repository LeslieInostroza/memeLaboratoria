import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>; // son varoles que emiten valores, son variables que emiten valores, hay distintos tipos de observables

  constructor(private firebaseAuth: AngularFireAuth) { 
    this.user = firebaseAuth.authState; // conecta el estado de firebaseAuth con el servicio
  }
  signup(email: string, password: string) {
    return this.firebaseAuth.auth
      .createUserWithEmailAndPassword(email, password);
      /*.auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Holi', value);
      })
      .catch(err => {
        console.error('Un Error :( ):',err.message);
      });*/    
  }
  login(email: string, password: string) {
    return this.firebaseAuth.auth
      .signInWithEmailAndPassword(email, password)
      /*.then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });*/
  }
  logout() {
    return this.firebaseAuth.auth
      .signOut();
  }
}
