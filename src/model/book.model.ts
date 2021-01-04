import { FormControl } from "@angular/forms";

export interface Book {
    id: number;
    name: String;
    thumbnail: String;
    price: number;
    discount: number;
    author?: String;
    producer?: String;
    year?: number;
    quantity?: number;
    quantityForm?: FormControl;
}