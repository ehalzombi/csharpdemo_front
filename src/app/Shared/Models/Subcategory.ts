import { Vacancy } from './Vacancy';

export class Subcategory {
  public Title: string;
  public Url: string;
  public Vacancies: Array<Vacancy>;

  constructor() {
    this.Vacancies = [];
  }
}
