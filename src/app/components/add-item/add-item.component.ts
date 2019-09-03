import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { IPhoneBookItem } from 'src/app/models/iphone-book-item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  form : FormGroup;
  item : IPhoneBookItem;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      itemName : new FormControl(),
      itemSurname: new FormControl(),
      itemPhone : new FormControl()
    })
  }

  saveItem(): void{
    console.log(this.form)
  }
}
