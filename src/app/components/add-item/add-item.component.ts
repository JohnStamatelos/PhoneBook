import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, RequiredValidator } from '@angular/forms';
import {  } from '@angular/forms';

import { IPhoneBookItem } from 'src/app/models/iphone-book-item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  form : FormGroup;
  item : IPhoneBookItem;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      itemName: [''],
      itemSurname: '',
      itemPhone : ''
    })
  }

  saveItem(): void{
    console.log(this.form)
  }
}
