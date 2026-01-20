import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockEntryList } from './stock-entry-list';

describe('StockEntryList', () => {
  let component: StockEntryList;
  let fixture: ComponentFixture<StockEntryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockEntryList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockEntryList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
