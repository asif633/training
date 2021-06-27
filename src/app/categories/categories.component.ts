import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: any[];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  async loadCategories() {
    try {
      const res:any = await this.categoriesService.loadAllCategories();
      this.categories = res;
      console.log('res', res);
    } catch (error) {
      console.log('err', error);
    }
  }

}
