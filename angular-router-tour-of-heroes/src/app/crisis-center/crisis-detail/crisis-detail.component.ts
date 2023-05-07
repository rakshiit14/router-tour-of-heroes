import { Component, Input, OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { CrisisService } from '../crisis.service';
import { DialogService } from 'src/app/dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
})
export class CrisisDetailComponent implements OnInit {
  crisis!: Crisis;
  editName = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService,
  ){}
  ngOnInit(): void {
    this.route.data
    .subscribe(data => {
      const crisis: Crisis = data['crisis'];
      this.editName = crisis.name;
      this.crisis = crisis;
    });
  }
  gotoCrises(){
    const crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['/crises', {id: crisisId}],{relativeTo: this.route});
  }
  cancel() {
    this.gotoCrises();
  }
  
  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }
  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }
}
