import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { EventsPage } from '../pages/events/events';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      firebase.initializeApp({
        apiKey: "AIzaSyDl3NwfLBjr-suRX0g1mOxauSVXFEtB54s",
        authDomain: "lab5hibridas-5aa93.firebaseapp.com",
        databaseURL: "https://lab5hibridas-5aa93.firebaseio.com",
        projectId: "lab5hibridas-5aa93",
        storageBucket: "lab5hibridas-5aa93.appspot.com",
        messagingSenderId: "432821738837"

    });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
