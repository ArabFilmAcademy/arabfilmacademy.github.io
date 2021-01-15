import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  localStorage: Storage;

  changes$ = new Subject();

  constructor() {
    this.localStorage = window.localStorage;
  }
  get(key: string): any {
    if (this.isLocalStorageSupported) {
      return JSON.parse(this.localStorage.getItem(key));
    }
    return null;
  }
  remove(key: string): any {
    if (this.isLocalStorageSupported) {
      this.localStorage.removeItem(key);
      return true;
    }
    return false;
  }
  set(key: string, value: string): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.setItem(key, JSON.stringify(value));
      this.changes$.next({
        type: 'set',
        key,
        value,
      });
      return true;
    }
    return false;
  }
  get isLocalStorageSupported(): boolean {
    return !!this.localStorage;
  }
}
