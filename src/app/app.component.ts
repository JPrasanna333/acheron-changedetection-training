import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Change Detection Demo';
  _count = 1; 
  count = {
    count : 1
  }
  Counter$? : BehaviorSubject<any>; 
  constructor() {
    
  }
  ngOnInit(): void {
    this.Counter$ = new BehaviorSubject<any>({
      count : 0
    })
  }

  inc():void{

    this.count = {
      count : this.count.count + 1
    };
    this.Counter$?.next({
      count : ++this._count
    })

  }

}
