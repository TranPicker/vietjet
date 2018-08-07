export class Listsession {
  public creator: number;
  public date: Date;
  public status: string;
  public cityPair: string;

  constructor(create: number, date: Date, status: string, cityPair: string) {
    this.creator = create;
    this.date = date;
    this.status = status;
    this.cityPair = cityPair;
  }
}
