import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forms';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDh6budoUwlSxQh7_peBnQvVrU_Xi06cdQ",
      authDomain: "qatesttask-3bd9a.firebaseapp.com",
      databaseURL: "https://qatesttask-3bd9a-default-rtdb.firebaseio.com",
      projectId: "qatesttask-3bd9a",
      storageBucket: "qatesttask-3bd9a.appspot.com",
      messagingSenderId: "88188514881",
      appId: "1:88188514881:web:e29fc3e5e0c521170c4cc0",
      measurementId: "G-HKV70M7SVT"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app)
  }
}
