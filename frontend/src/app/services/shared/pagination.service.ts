import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  private currenPageSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(1);

  currentPage$ = this.currenPageSubject.asObservable();

  setCurrentPage(page: number): void {
    this.currenPageSubject.next(page);
  }



}
