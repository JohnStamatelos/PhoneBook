import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPhoneBookItem } from 'src/app/models/iphone-book-item';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html'
})

export class DeleteModalComponent {
  itemToBeDeleted: IPhoneBookItem;
  phoneBookItemArray: IPhoneBookItem[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.itemToBeDeleted = data.selectedItem;
  }

  deleteThisItem(): void {
    this.getPhoneBookDataFromLocalStorage();
    this.spliceItemFromPhoneBookData();
    this.updatePhoneBookDataOnLocalStorage();
  }

  private getPhoneBookDataFromLocalStorage(): void {
    this.phoneBookItemArray = JSON.parse(localStorage.getItem('phoneBookData'))
  }

  private spliceItemFromPhoneBookData(): void {
    this.phoneBookItemArray.splice(this.itemToBeDeleted.id - 1, 1)
  }

  private updatePhoneBookDataOnLocalStorage() :void{
    localStorage.setItem('phoneBookData', JSON.stringify(this.phoneBookItemArray));
  }
}
