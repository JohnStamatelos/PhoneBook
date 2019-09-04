import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoneBookItem } from 'src/app/models/iphone-book-item';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  itemToEditID: number;
  itemToEdit: IPhoneBookItem;
  phoneBookData: IPhoneBookItem[];

  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.route.params.subscribe(params =>
      this.itemToEditID = +params.id);
  }

  ngOnInit() {
    this.getPhoneBookArrayFromStorage();
    this.populateItemToBeEdited();
    this.initTemplate();
  }

  getPhoneBookArrayFromStorage(): void {
    this.phoneBookData = JSON.parse(localStorage.getItem('phoneBookData'));
  }

  populateItemToBeEdited(): void {
    this.itemToEdit = (this.phoneBookData.filter(x => x.id === this.itemToEditID))[0];
  }

  initTemplate(): void {
    this.form = this.fb.group({
      name: [this.itemToEdit.name, [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
      surname: [this.itemToEdit.surname, [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
      phoneNumber: [this.itemToEdit.phoneNumber, [Validators.required, Validators.pattern(/^0((60[3-9]|64[0-5]|66[0-5])\d{6}|(7[1-4689]|6[1-3]|8[1-4])\d{7})$/)]],
    });
  }

  editItem(): void {
    this.itemToEdit = this.form.value;
    this.itemToEdit.id = this.itemToEditID;
    this.updatePhoneBook();
    localStorage.setItem('phoneBookData', JSON.stringify(this.phoneBookData));
    this.openSnackBar(`${this.form.value.name} has been edited!`, '');
  }

  updatePhoneBook(): void {
    for (const i in this.phoneBookData) {
      if (this.phoneBookData[i].id === this.itemToEdit.id) {
        this.phoneBookData[i] = this.itemToEdit;
        break;
      }
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1200);
  }


}
