import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RcryptionService {
  private _code: number[];
  constructor() { }

  public encrypt(code: string) {
    this.codeBreak(code);
  }

  private codeBreak(code: string) {
    for (let i = 0; i < code.length; i++) {
      // const ascii = code.charCodeAt[i];
      // this._code.push(ascii);
      console.log(this._code);
    }
  }
}
