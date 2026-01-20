import { StockEntryItem } from "./stock-entry-item";
import { Supplier } from "./supplier";

export interface StockEntry {
    id : number | null;
    supplier : Supplier;
    entryDate : Date | null;
    items : StockEntryItem[];
}
