import { AfterContentInit, Component, ContentChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CrudFactory, GENERIC_CRUD } from 'src/app/crud-page/interfaces/crud-factory';
import { GENERIC_SEARCH, SearchFactory } from 'src/app/crud-page/interfaces/crud-pesquisa';

@Component({
  selector: 'app-crud-page',
  templateUrl: './crud-page.component.html',
  styleUrls: ['./crud-page.component.css']
})
export class CrudPageComponent implements OnDestroy, AfterContentInit {

  public view!: 'SEARCH' | 'EDITION';
  @ContentChild(GENERIC_CRUD) public crud!: CrudFactory<any>;
  @ContentChild(GENERIC_SEARCH) public search!: SearchFactory<any, any>;
  private subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngAfterContentInit(): void {
    this.registerParams();
    this.registerSearchEvents();
    this.registerCrudEvents();
  }

  private registerParams() {
    const subscriber = this.activatedRoute.params.subscribe(params => {
      if (params['action']) {
        this.setAction(params['action']);
      }
    });
    this.subscription.add(subscriber);
  }

  private registerCrudEvents() {
    this.subscription.add(this.crud.createEvent.subscribe(this.refreshSearch.bind(this)));
    this.subscription.add(this.crud.updateEvent.subscribe(this.refreshSearch.bind(this)));
  }

  private refreshSearch() {
    this.search.refresh();
  }

  private registerSearchEvents() {
    this.subscription.add(this.search.newEvent.subscribe(this.navigateToNew.bind(this)));
    this.subscription.add(this.search.editionEvent.subscribe(this.navigateToEdition.bind(this)));
  }

  setAction(action: string) {
    switch (action) {
      case 'new': this.new(this.activatedRoute.snapshot.queryParams); break;
      case 'search': this.openSearch(); break;
      default: this.editRecord(action);
    }
  }

  private new(value?: any) {
    this.view = 'EDITION';
    this.crud.newObj(value).subscribe();
  }

  private openSearch() {
    this.view = 'SEARCH';
    this.search.search();
  }

  private editRecord(registro: any) {
    this.crud.read(registro).subscribe(() => {
      this.view = 'EDITION';
    });
  }

  public navigateToSearch() {
    let route = 'search';
    this.router.navigate([`../${route}`], { relativeTo: this.activatedRoute }).then((value) => {
      const forceActionIfSameRoute = !value;
      if (forceActionIfSameRoute) {
        this.setAction(route);
      }
    });
  }

  public navigateToNew(params: any) {
    let route = 'new';
    this.router.navigate([`../${route}`], { relativeTo: this.activatedRoute, queryParams: params }).then((value) => {
      const forceActionIfSameRoute = !value;
      if (forceActionIfSameRoute) {
        this.setAction(route);
      }
    });
  }

  public navigateToEdition(id: any) {
    this.router.navigate([`../${id}`], { relativeTo: this.activatedRoute }).then((value) => {
      const forceActionIfSameRoute = !value;
      if (forceActionIfSameRoute) {
        this.setAction(id);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
