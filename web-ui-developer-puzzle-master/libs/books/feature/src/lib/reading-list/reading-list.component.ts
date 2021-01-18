import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList, UpdateReadingListItem } from '@tmo/books/data-access';
import { ReadingListItem } from '@tmo/shared/models';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(private readonly store: Store) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
  }

  updateBookFinishedReadingList(item: ReadingListItem) {

    var newItem: ReadingListItem = { ...item, finished: true, finishedDate: new Date().toDateString() }
    console.log(newItem);
    this.store.dispatch(UpdateReadingListItem({ item: newItem }));

}

}
