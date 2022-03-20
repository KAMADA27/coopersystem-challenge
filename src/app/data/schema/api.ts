import { InvestmentRemote } from "./investment-remote";

export interface Response {
  response: {
    status: string;
    data: {
      listaInvestimentos: InvestmentRemote[];
    };
  };
}
