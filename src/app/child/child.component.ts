import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit,OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changs after input");
  }
  ngOnInit(): void {
    console.log("Inside init");
    
  }
  @Input()
  childdata:string='';

  @Output()
  myevent:EventEmitter<string> =  new EventEmitter<string>
  sendmessage(){
      this.myevent.emit("Message from child...")
  }

}
