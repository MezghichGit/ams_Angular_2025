import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProvider } from './update-provider';

describe('UpdateProvider', () => {
  let component: UpdateProvider;
  let fixture: ComponentFixture<UpdateProvider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateProvider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProvider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
