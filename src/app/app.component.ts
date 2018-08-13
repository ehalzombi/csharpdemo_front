import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { QueryBuilderConfig, QueryBuilderClassNames } from 'angular2-query-builder';

import { VacancyService } from './Shared/Services/vacancy.service';
import { Category } from './Shared/Models/Category';
import { FullVacancy } from './Shared/Models/FullVacancy';
import { MatAccordion } from '@angular/material/expansion';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public categoryList: Category[] = [];
  public searchStr = "";

  @ViewChild('categoryListPanel') categoryPanel: MatAccordion;

  constructor(private vacancyService: VacancyService) {

    this.vacancyService.CategoryList()
      .toPromise()
      .then((response: Category[]) => {
        this.categoryList = response;

      })
      .catch(err => console.error(err));
  }

  public UpdateCategoryList(reset: HTMLButtonElement) {
    reset.disabled = true;
    this.vacancyService.UpdateCategoryList()
      .toPromise()
      .then((response) => {
        reset.disabled = false;
        this.categoryList = response;

      })
      .catch(err => console.error(err));
  }

  public ApplyFilter() {

    this.vacancyService.CategoryList(this.searchStr)
      .toPromise()
      .then((response) => {
        this.categoryList = response;
      })
      .catch(err => console.error(err));

    this.categoryPanel.openAll();
  }

}
