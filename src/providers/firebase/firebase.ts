import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) { }
  getEvents() {
      return this.afd.list('/Events');
    }

    getInfoEvent(eventID){
      return this.afd.list('/Events');
    }



}
