// Import the necessary
import { Inject, Injectable } from '@angular/core';
import {
  GENTLEMAN_DEFAULT_STATE,
  GManagerService,
} from 'gentleman-signals-state-manager';

// Define your own service
@Injectable({
  providedIn: 'root',
})
export class SignalsManagerService<T> {
  signalsManager: GManagerService<T>;

  // Inject the initial state
  constructor(@Inject(GENTLEMAN_DEFAULT_STATE) defaultState: T) {
    this.signalsManager = new GManagerService(defaultState);
  }
}
