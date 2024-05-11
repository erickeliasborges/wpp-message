import { Component, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SearchFactory } from 'src/app/crud-page/interfaces/crud-pesquisa';
import { Message } from 'src/app/pages/message/models/message';
import { GENERIC_SEARCH } from '../../../crud-page/interfaces/crud-pesquisa';
import { MessageService } from 'src/app/pages/message/message.service';

@Component({
  selector: 'app-message-search',
  templateUrl: './message-search.component.html',
  styleUrls: ['./message-search.component.scss'],
  providers: [
    { provide: GENERIC_SEARCH, useExisting: MessageSearchComponent },
  ]
})
export class MessageSearchComponent implements SearchFactory<Message, number> {

  newEvent = new EventEmitter();
  editionEvent = new EventEmitter<number>();

  displayedColumns: string[] = ['id', 'title', 'acoes'];
  dataSource: MatTableDataSource<Message>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private messageService: MessageService,
  ) {
    this.dataSource = new MatTableDataSource();
  }

  search(): void {
    this.messageService.findAll().subscribe({
      next: (value) => {
        this.dataSource.data = value;
      }
    })
  }

  refresh(): void {
    console.error('Method not implemented.');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public onEdit(id: number) {
    this.editionEvent.emit(id);
  }

}
