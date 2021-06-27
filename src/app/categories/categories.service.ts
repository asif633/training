import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CategoriesService {
    
    constructor(private http: HttpClient) {}

    async loadAllCategories() {
        return await this.http.get(`http://localhost:3000/category`).toPromise();
    }

    async loadAllCategory(id) {
        return await this.http.get(`http://localhost:3000/category/${id}`).toPromise();
    }

    async addCategory({ name, slug, banner}) {
        return await this.http.post(`http://localhost:3000/category`, {
            name, slug, banner
        }).toPromise();
    }

    async updateCategory({ name, slug, banner, id}) {
        return await this.http.put(`http://localhost:3000/category/${id}`, {
            name, slug, banner
        }).toPromise();
    }

    async deleteCategory(id) {
        return await this.http.delete(`http://localhost:3000/category/${id}`).toPromise();
    }

}