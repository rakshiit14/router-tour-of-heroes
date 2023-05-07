import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Crisis } from './crisis';
import { CRISES } from './mock-crisis'; 
import { MessageService } from '../message.service'; 
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  constructor(private messageService: MessageService) { }

  getCrises(): Observable<Crisis[]> {
    const crises = of(CRISES);
    this.messageService.add('HeroService: fetched crises');
    return crises;
  }
  getHero(id: number | string) {
    return this.getCrises().pipe(
      // (+) before `id` turns the string into a number
      map((crises: Crisis[]) => crises.find(crisis => crisis.id === +id)!)
    );
  }
}
