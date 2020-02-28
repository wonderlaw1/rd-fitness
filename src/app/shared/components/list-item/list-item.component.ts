import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  @Input() item: any;
  @Output() deleted: EventEmitter<number> = new EventEmitter();
  @Output() edit: EventEmitter<number> = new EventEmitter();

  constructor() { }

  handleDelete(): void {
    this.deleted.emit(this.item.id);
  }

  handleEdit(): void {
    this.edit.emit(this.item.id);
  }

}
