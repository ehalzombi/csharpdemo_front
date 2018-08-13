import { Subcategory } from './Subcategory';

export class Category {
  public Title: string;
  public Url: string;
  public Subcategories: Array<Subcategory>;

  constructor() {
    this.Subcategories = [];
  }
}
