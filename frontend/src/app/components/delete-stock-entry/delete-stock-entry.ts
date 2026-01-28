import { Component, inject, Input} from '@angular/core';
import { StockEntryService } from '../../service/stockEntryService/stock-entry-service';
import { StockEntry } from '../../interface/stock-entry';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-stock-entry',
  imports: [],
  templateUrl: './delete-stock-entry.html',
  styleUrl: './delete-stock-entry.scss',
})
export class DeleteStockEntry {

  stockEntryService = inject(StockEntryService);
  activeModal = inject(NgbActiveModal);
  
  @Input() stockEntry!: StockEntry;
  
  deleteStock(){
    this.stockEntryService.deleteStock(this.stockEntry).subscribe({
      next: () => {
        this.activeModal.close()
      }
    })
  }
}
