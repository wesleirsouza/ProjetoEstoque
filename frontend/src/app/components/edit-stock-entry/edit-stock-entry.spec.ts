import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStockEntry } from './edit-stock-entry';

describe('EditStockEntry', () => {
  let component: EditStockEntry;
  let fixture: ComponentFixture<EditStockEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditStockEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStockEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
