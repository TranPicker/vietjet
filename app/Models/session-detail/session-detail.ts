export class SessionDetail {
  id: number;
  cityPair: string;
  onSaleFrom: Date;
  onSaleTo: Date;
  currency: number;
  result: string;
  notes: string;

  constructor(id: number, citypair: string, saleFrom: Date, saleTo: Date, current: number, result: string, notes: string) {
    this.id         = id;
    this.cityPair   = citypair;
    this.onSaleFrom = saleFrom;
    this.onSaleTo   = saleTo;
    this.currency    = current;
    this.result     = result;
    this.notes      = result;
  }
}
