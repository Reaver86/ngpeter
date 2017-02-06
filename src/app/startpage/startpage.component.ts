import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements OnInit {

  @Output()
  startApp = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
