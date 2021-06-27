import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../categories/categories.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  name: string;
  slug: string;
  banner: string;
  categoryId: string;

  constructor(private catServ: CategoriesService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      this.categoryId = params['id'] ? params['id']: null;
      if (this.categoryId) this.getCategory();
    });
  }


  async getCategory() {
    try {
      const res: any = await this.catServ.loadAllCategory(this.categoryId);
      if (res) {
        const { name, slug, banner } = res;
        this.name = name;
        this.slug = slug;
        this.banner = banner;
      }
    } catch (error) {
      console.log('err', error);
    }
  }

  updateName(event) {
    console.log('event', event);
    this.name = event;
  }

  async saveCategory() {
    console.log('data ', this.name, this.slug, this.banner);
    try {
      if (this.categoryId) {
        const res:any = this.catServ.updateCategory({
          name: this.name, slug: this.slug, banner: this.banner, id: this.categoryId
        });
        console.log('res', res);
      } else {
        const res:any = this.catServ.addCategory({
          name: this.name, slug: this.slug, banner: this.banner
        });
        console.log('res', res);
      }
      this.router.navigate(['/categories']);
    } catch (error) {
      console.log('err', error);
    }
  }

}
