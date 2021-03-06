import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {

  @Input() title: string;
  @Input() buttonClass: string;
  @Input() buttonRadius: string;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.buttonRadius = '10px';
  }

  buttonClicked() {
    this.buttonClick.emit({ clicked: true, title: this.title });
  }

}
