import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProviders } from './list-providers';

describe('ListProviders', () => {
  let component: ListProviders;
  let fixture: ComponentFixture<ListProviders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListProviders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProviders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
