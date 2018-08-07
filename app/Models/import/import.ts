export class Import {
  id: number;
  cityPair: string;
  fareClass: string;
  onSaleFrom: Date;
  onSaleTo: Date;
  travelFrom: Date;
  travelTo: Date;
  base: number;
  usd: number;
  jyp: string;
  khr: string;

  constructor(id: number, citypair: string, fareclass: string, onsalefrom: Date, onsaleto: Date, travelfrom: Date, travelto: Date, base: number, usd: number, jyp: string, khr: string) {
    this.id = id;
    this.cityPair = citypair;
    this.fareClass = fareclass;
    this.onSaleFrom = onsalefrom;
    this.onSaleTo = onsaleto;
    this.travelFrom = travelfrom;
    this.travelTo = travelto;
    this.base = base;
    this.usd = usd;
    this.jyp = jyp;
    this.khr = khr;
  }
}
