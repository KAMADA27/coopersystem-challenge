import { Stock } from "./stock";

export interface Investment {
  name: string;
  goal: string;
  totalBalance: number;
  shortageIndicator: string;
  stock: Stock[]
}
