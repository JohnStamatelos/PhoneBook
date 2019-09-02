import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog} from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';

import { PhoneBookService } from '../services/phone-book-service.service';
import { IPhoneBookItem } from '../models/iphone-book-item';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  private displayedColumns = ['name', 'surname', 'phoneNumber', 'delete', 'edit'];
  private dataSource = new MatTableDataSource;
  items : IPhoneBookItem[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(
    private service: PhoneBookService,
  ) { }

  ngOnInit() {
    this.getPhoneBookData();
  }

  getPhoneBookData(): void {
    this.service.getPhoneBookData().subscribe(data => {
      this.items = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.data = data;
    })
  }

  applyFilter(searchValue: string) {
    searchValue = searchValue.trim();
    searchValue = searchValue.toLowerCase();
    this.dataSource.filter = searchValue;
  }

}

