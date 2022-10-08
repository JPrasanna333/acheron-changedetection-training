// import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
// import { Observable, Observer, of, Subscription } from 'rxjs';

// @Component({
//   selector: 'app-count',
//   templateUrl: './count.component.html',
//   styleUrls: ['./count.component.css'],
//   changeDetection:ChangeDetectionStrategy.OnPush
// })
// export class CountComponent implements OnInit, OnDestroy {

//   @Input() Counter? : Observable<any>; 
//   CounterSubscription? : Subscription;
//   Count: any; 
//   countObserver : Observer<any> = {
//     next:(data:any)=>{
//       console.log(data);
//       this.Count = data; 
//       this.cd.markForCheck();
//     },
//     error:(err:any) => {console.log(err)},
//     complete:() =>{console.log('counter completed')}
//   };
//   constructor(private cd : ChangeDetectorRef) { }

//   ngOnInit(): void {

//     this.CounterSubscription = this.Counter?.subscribe(this.countObserver);
//   }

//   ngOnDestroy(): void {
//     if(this.CounterSubscription != undefined){
//       this.CounterSubscription.unsubscribe();
//     }
//   }
// }



import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Observer, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CountComponent{
  @Input() Counter? : Observable<any>; 
}
