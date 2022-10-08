import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class GreetComponent implements OnInit {

  @Input() count : any; 
  constructor(private cd : ChangeDetectorRef) { 
    this.cd.detach();
  }

  ngOnInit(): void {
  }

  refresh():void{
    this.cd.detectChanges();
   //this.cd.reattach();
  // this.cd.markForCheck();
  }

}
