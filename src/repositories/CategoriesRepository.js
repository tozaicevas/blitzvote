import Category from '../models/Category';

export class CategoryRepository {
    static data  = [
        new Category(1, 'Mokslas'),
        new Category(2, 'Saugumas'),
        new Category(3, 'Svietimas')
    ];

    getAll = () => {
        return this.data;
    }

    insert = (category) => {
        this.data.push(category);
    }
}