export class Result {
  id: string;
  cityPair: string;
  onSaleFrom: Date;
  onSaleTo: Date;
  currency: number;
  result: string;
  notes: string;

  constructor(id: string, citypair: string, onsalefrom: Date, onsaleto: Date, currency: number, result: string, notes: string) {
    this.id = id;
    this.cityPair = citypair;
    this.onSaleFrom = onsalefrom;
    this.onSaleTo = onsaleto;
    this.currency = currency;
    this.result = result;
    this.notes = notes;
  }
}
