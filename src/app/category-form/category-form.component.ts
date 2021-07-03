import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  catForm: FormGroup;

  category: FormControl = new FormControl();

  constructor(private catServ: CategoriesService, private router: Router, private actRoute: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      this.categoryId = params['id'] ? params['id']: null;
      if (this.categoryId) this.getCategory();
    });

    this.catForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(5)]],
      slug: [''],
      banner: [''],
    });


    // this.category.valueChanges.subscribe(val => {
    //   console.log('category', val);
    // });
  }


  async getCategory() {
    try {
      const res: any = await this.catServ.loadAllCategory(this.categoryId);
      if (res) {
        const { name, slug, banner } = res;
        this.name = name;
        this.slug = slug;
        this.banner = banner;

        //this.catForm.get('name').setValue(name);
        //this.catForm.controls.slug.setValue(name);
        this.catForm.patchValue({
          name, slug, banner
        });
      }
    } catch (error) {
      console.log('err', error);
    }
  }

  updateName(event) {
    console.log('event', event);
    this.name = event;
  }

  @ViewChild('categoryForm') categoryForm: any;

  async saveCategory() {
    console.log('data ', this.categoryForm, this.category.value );
    if (this.categoryForm.valid) {
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

  async saveCategoryReactive() {
    console.log('data reactive', this.catForm );
    if (this.catForm.valid) {
      try {
        if (this.categoryId) {
          const res:any = this.catServ.updateCategory({
            ...this.catForm.value, id: this.categoryId
          });
          // console.log('res', res);
        } else {
          const res:any = this.catServ.addCategory({
            name: this.catForm.value.name, slug: this.catForm.value.slug, banner: this.catForm.value.banner
          });
          console.log('res', res);
        }
        this.router.navigate(['/categories']);
      } catch (error) {
        console.log('err', error);
      }
    }
  }

}
