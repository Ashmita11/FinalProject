import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAccComponent } from './add-edit-acc.component';

describe('AddEditAccComponent', () => {
  let component: AddEditAccComponent;
  let fixture: ComponentFixture<AddEditAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
