import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { } from '@angular/forms';

import { IPhoneBookItem } from 'src/app/models/iphone-book-item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  form: FormGroup;
  item: IPhoneBookItem;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      itemName: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
      itemPhone: ['', [Validators.required, Validators.pattern(/^0((60[3-9]|64[0-5]|66[0-5])\d{6}|(7[1-4689]|6[1-3]|8[1-4])\d{7})$/)]],
      itemSurname: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
    })
  }

  saveItem(): void {
    console.log(this.form)
  }
}
