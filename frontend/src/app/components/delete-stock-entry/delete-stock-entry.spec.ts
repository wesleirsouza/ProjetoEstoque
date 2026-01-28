import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStockEntry } from './delete-stock-entry';

describe('DeleteStockEntry', () => {
  let component: DeleteStockEntry;
  let fixture: ComponentFixture<DeleteStockEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteStockEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteStockEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
