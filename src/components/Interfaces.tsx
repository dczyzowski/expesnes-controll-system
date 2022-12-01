export interface Expense {
  user: string;
  vendor: string;
  category: string;
  date: Date;
  amount: number;
  items?: {
    name: string;
    market: string;
    amount: number;
  }[];
}

export type Item = {
  position: string;
  amount: number;
};
