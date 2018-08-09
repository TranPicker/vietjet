export class User {
  public userName: string;
  public passWord: string;
  public remember: boolean;

  constructor() {
    this.userName = '';
    this.passWord = '';
    this.remember = false;
  }
}
