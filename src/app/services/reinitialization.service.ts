import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReinitializationService {

  private reinitSubject = new Subject<void>();
  reinit$ = this.reinitSubject.asObservable();

  constructor() { }

  triggerReinit() {
    this.reinitSubject.next();
  }
}
