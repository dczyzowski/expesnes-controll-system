export interface Expense {
  user: string;
  vendor: string;
  category: string;
  date: Date;
  amount: number;
  item?: {
    name: string;
    market: string;
    amount: number;
  }[];
}
