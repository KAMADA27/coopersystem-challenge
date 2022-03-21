import { StockRemote } from "./stock-remote";

export interface InvestmentRemote {
  nome: string;
  objetivo: string;
  saldoTotal: number;
  indicadorCarencia: string;
  acoes: StockRemote[];
}
