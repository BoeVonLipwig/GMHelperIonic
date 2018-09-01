import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {MapsPage} from "../pages/maps/maps";
import {CharacterPage} from "../pages/character/character";
import {EditCharPage} from "../pages/edit-char/edit-char";
import {FirebaseProvider} from '../providers/firebase/firebase';

import {Camera} from '@ionic-native/camera'
import {AndroidPermissions} from "@ionic-native/android-permissions";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapsPage,
    CharacterPage,
    EditCharPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapsPage,
    CharacterPage,
    EditCharPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    AndroidPermissions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {
}