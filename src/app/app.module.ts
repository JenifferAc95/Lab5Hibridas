import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Facebook } from '@ionic-native/facebook';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventsPage } from '../pages/events/events';


import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDl3NwfLBjr-suRX0g1mOxauSVXFEtB54s",
  authDomain: "lab5hibridas-5aa93.firebaseapp.com",
  databaseURL: "https://lab5hibridas-5aa93.firebaseio.com",
  projectId: "lab5hibridas-5aa93",
  storageBucket: "lab5hibridas-5aa93.appspot.com",
  messagingSenderId: "432821738837"
  };


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    FirebaseProvider
  ]
})
export class AppModule {}
