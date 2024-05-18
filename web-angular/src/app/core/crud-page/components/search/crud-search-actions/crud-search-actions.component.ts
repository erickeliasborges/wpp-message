import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crud-search-actions',
  templateUrl: './crud-search-actions.component.html',
  styleUrls: ['./crud-search-actions.component.scss']
})
export class CrudSearchActionsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  public onNovoClick() {
    this.router.navigate([`../new`], { relativeTo: this.activatedRoute });
  }

}
