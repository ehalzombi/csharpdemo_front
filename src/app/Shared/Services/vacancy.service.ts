import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from '../Models/Category';


@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  private host_dev = 'https://localhost:44303'; 
  private host_prod = 'https://hhparser.azurewebsites.net';
  private host;

  constructor(private http: HttpClient) {
      this.host = this.host_prod;
  }

  public CategoryList(searchString: string = null): Observable<Category[]> {

    let searchParams: HttpParams = new HttpParams();
    if (!!searchString)
      searchParams = searchParams.set("search_str", searchString);

    return this.http.get<Category[]>(`${this.host}/api/HomeApi/CategoryList`, {params: searchParams});
    
  }

  public UpdateCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.host}/api/HomeApi/UpdateCategoryList`);

  }
}
