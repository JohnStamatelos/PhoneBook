import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';

import { PhoneBookService } from '../services/phone-book-service.service';
import { IPhoneBookItem } from '../models/iphone-book-item';
import { DeleteModalComponent } from '../components/delete-modal/delete-modal.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  private displayedColumns = ['name', 'surname', 'phoneNumber', 'delete', 'edit'];
  private dataSource = new MatTableDataSource;
  items: IPhoneBookItem[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private service: PhoneBookService,
    public dialog: MatDialog
  ) { }

  openDialog(selectedItem: IPhoneBookItem): void {
    const ref = this.dialog.open(DeleteModalComponent, {
      data: { selectedItem }
    });
    ref.afterClosed().subscribe(closed => {
      this.populatePhoneBookData();
    })
  }

  ngOnInit() {
    this.populatePhoneBookData();
  }

  populatePhoneBookData(): void {
    if (!localStorage.getItem('phoneBookData')) {
      this.getDataFromService();
    } else {
      this.getDataFromLocalStorage();
    }
  }

  getDataFromService(): void {
    this.service.getPhoneBookData().subscribe(data => {
      this.items = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.data = data;
      localStorage.setItem('phoneBookData', JSON.stringify(data))
    })
  }

  getDataFromLocalStorage(): void {
    this.items = JSON.parse(localStorage.getItem('phoneBookData'));
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.items;
  }

  applyFilter(searchValue: string) {
    searchValue = searchValue.trim();
    searchValue = searchValue.toLowerCase();
    this.dataSource.filter = searchValue;
  }

}

