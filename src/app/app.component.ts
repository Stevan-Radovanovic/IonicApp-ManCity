import { Component, OnInit } from '@angular/core';
import { Plugins, Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { AuthService } from './shared/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private platform: Platform, private auth: AuthService) {
    this.initializeApp();
  }
  ngOnInit(): void {
    this.auth.autoLogIn();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('%c ALERT: App Launched', environment.consoleLog);
      if (Capacitor.isPluginAvailable('SplashScreen')) {
        Plugins.SplashScreen.hide();
      }
    });
  }

  onLogout() {
    this.auth.logOut();
  }
}
