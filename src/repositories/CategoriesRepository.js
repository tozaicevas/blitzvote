import Category from '../models/Category';

export class CategoryRepository {
    static data  = [
        new Category(1, 'Mokslas'),
        new Category(2, 'Saugumas'),
        new Category(3, 'Svietimas'),
        new Category(4, 'Ekonomika'),
        new Category(5, 'Ekologija'),
    ];

    static getAll = () => {
        return this.data;
    }

    static insert = (category) => {
        this.data.push(category);
    }
}