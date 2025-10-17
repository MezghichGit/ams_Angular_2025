import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProvider } from './add-provider';

describe('AddProvider', () => {
  let component: AddProvider;
  let fixture: ComponentFixture<AddProvider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProvider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProvider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
