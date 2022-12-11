import {Injectable} from '@angular/core';
import {AngularFireMessaging} from '@angular/fire/messaging';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {

  }

  // tslint:disable-next-line:typedef
  requestPermission() {
    this.angularFireMessaging.requestPermission.subscribe((token) => {
        console.log('requestPermission ', token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  // tslint:disable-next-line:typedef
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log('new message received. ', payload);
        this.currentMessage.next(payload);
        this.showCustomerNotification(payload);
      });
  }

  // tslint:disable-next-line:typedef
  showCustomerNotification(payload: any) {
    // tslint:disable-next-line:variable-name
    const notify_data = payload.notification;
    const title = notify_data.title;
    const options = {
      body: notify_data.body,
      icon: './assets/HaiNT.jpg',
      badge: './assets/HungNV.jpg',
      image: './assets/SonPT.jpg',
    };
    console.log('new message received', notify_data);
    const notify: Notification = new Notification(title, options);
    notify.onclick = event => {
      event.preventDefault();
      window.location.href = 'https://www.google.com';
    };
  }
}
