import { Product } from "./product";

export interface StockEntryItem {
    id : number | null;
    product : Product;
    quantity : number;
    unitPrice : number; 
}
