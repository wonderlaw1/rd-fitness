import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {

  @Input() item: any;
  @Output() deleted: EventEmitter<number> = new EventEmitter();
  @Output() edit: EventEmitter<number> = new EventEmitter();

  constructor() { }

  handleDelete() {
    this.deleted.emit(this.item.id);
  }

  handleEdit() {
    this.edit.emit(this.item.id);
  }

}
