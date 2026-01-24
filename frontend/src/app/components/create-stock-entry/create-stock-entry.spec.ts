import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStockEntry } from './create-stock-entry';

describe('CreateStockEntry', () => {
  let component: CreateStockEntry;
  let fixture: ComponentFixture<CreateStockEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateStockEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStockEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
