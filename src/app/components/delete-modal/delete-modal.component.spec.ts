import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteModalComponent } from './delete-modal.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomePageComponent } from 'src/app/home-page/home-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatTableModule, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('DeleteModalComponent', () => {
  let component: DeleteModalComponent;
  let fixture: ComponentFixture<DeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatTableModule, MatDialogModule],
      declarations: [DeleteModalComponent, HomePageComponent],
      // providers: [{ provide: MAT_DIALOG_DATA, useValue: {} },
      // { provide: MatDialogRef, useValue: {} }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
