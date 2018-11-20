import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ANIMALES } from '../assets/data.animales';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public arreglo:any = [];
  public audio = new Audio();
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.arreglo = ANIMALES.slice();
  }

  public reproducir(animal):any{
   

     this.audio.src = animal.audio;
     this.audio.load();
     this.audio.play();
     animal.reproduciendo = true;
     setTimeout(() => {
      animal.reproduciendo = false
    }, animal.duracion * 1000);
  }

  public  eliminar(posicion:Number):any{

    this.arreglo.splice(posicion,1);
  }

  public refrescar(refresher):any{
    
    setTimeout(() => {
      this.arreglo = ANIMALES.slice(0);
      refresher.complete();
    }, 2000);
  }
}
