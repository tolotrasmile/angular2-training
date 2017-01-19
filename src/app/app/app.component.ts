import {Component, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnDestroy {

  private data: Observable<Array<any>>;
  private subscription: Subscription;

  constructor() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(42);
        observer.next(43);
        observer.complete();
      }, 5000);
      console.debug('Started observable sequence')
    });

    this.subscription = this.data.subscribe(
      value => console.log('Value : ' + value),
      error => console.error(error),
      () => console.debug('Complete')
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
