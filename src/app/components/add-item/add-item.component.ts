import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { IPhoneBookItem } from 'src/app/models/iphone-book-item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  form: FormGroup;
  item: IPhoneBookItem;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^0((60[3-9]|64[0-5]|66[0-5])\d{6}|(7[1-4689]|6[1-3]|8[1-4])\d{7})$/)]],
    });
  }

  saveItem(): void {
    this.item = this.form.value;
    const tempData = JSON.parse(localStorage.getItem('phoneBookData'));
    // Current ID only set for demo purpose, GUID would be ideal as the id is used to delete the user in delete-modal.component.ts
    this.item.id = tempData.length + 100;
    tempData.push(this.item);
    localStorage.setItem('phoneBookData', JSON.stringify(tempData));
    this.openSnackBar(`New contact : ${this.form.value.name} saved!`, '');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1500);
  }

}
