import { Component, Input, OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
})
export class CrisisDetailComponent implements OnInit {
  crisis$!: Observable<Crisis>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService,
  ){}
  ngOnInit(): void {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap)=> 
      this.service.getHero(params.get('id')!)
      )
    );
  }
  gotoCrises(crisis:Crisis){
    const crisisId = crisis ? crisis.id : null;
    this.router.navigate(['/crises', {id: crisisId}],{relativeTo: this.route});
  }
}
