import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Output() navigate: EventEmitter<string> = new EventEmitter();
  @Output() delete: EventEmitter<string> = new EventEmitter();
  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

  onNavigate(id: string) {
    this.navigate.emit(id);
  }

  onDelete(event: Event, id: string) {
    event.stopPropagation();
    console.log(id);
  }
}
