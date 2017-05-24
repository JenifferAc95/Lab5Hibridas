import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';
import { EventsPage } from '../events/events';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  eventsPage = EventsPage;
  userProfile: any = null;

  constructor(public navCtrl: NavController, private facebook: Facebook) {

  }

  facebookLogin(){
    this.facebook.login(['email']).then( (response) => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
            .credential(response.authResponse.accessToken);

        firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
            console.log("Firebase success: " + JSON.stringify(success));
            this.userProfile = success;
        })
        .catch((error) => {
            console.log("Firebase failure: " + JSON.stringify(error));
        });

    }).catch((error) => { console.log(error) });
  }

}
