import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchListenerService {
  private subjectInfo = new BehaviorSubject<string>('');

  constructor() {}

  searchChange(term: string): void {
    this.subjectInfo.next(term);
  }

  searchSubscribe(): Observable<string> {
    return this.subjectInfo.asObservable();
  }

}
