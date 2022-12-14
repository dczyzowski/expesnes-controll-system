export interface Expense {
  user: string;
  vendor: string;
  category: string;
  date: Date;
  amount: number;
  items?: InvoiceItem[];
}

export type InvoiceItem = {
  position: string;
  amount: number;
};
