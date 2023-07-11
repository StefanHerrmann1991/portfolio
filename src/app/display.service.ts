import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  private _showH2Only = new BehaviorSubject<boolean>(false);
  showH2Only$ = this._showH2Only.asObservable();

  private _isMenuOpen = new BehaviorSubject<boolean>(false);
  isMenuOpen$ = this._isMenuOpen.asObservable();

  toggleContent() {
    this._showH2Only.next(!this._showH2Only.getValue());
  }

  toggleMenu() {
    this._isMenuOpen.next(!this._isMenuOpen.getValue());
  }
}