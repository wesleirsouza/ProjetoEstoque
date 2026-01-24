import { Product } from "./product";

export interface StockEntryItem {
    id : number | null;
    product : Product | null;
    quantity : number | null;
    unitPrice : number | null; 
}
