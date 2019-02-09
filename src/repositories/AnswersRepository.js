import Answer from '../models/Answer';

export class AnswerRepository {
    static data  = [
        new Answer(1, 1, 'taaaaip'),
        new Answer(2, 1, 'manau ne, bet gal ir nieko'),
        new Answer(3, 2, 'hahha, prajuokinai'),
        new Answer(4, 2, 'krypu krypu'),
        new Answer(5, 1, 'geras vaizdelis')
    ];

    getAll = () => {
        return this.data;
    }

    insert = (answer) => {
        this.data.push(answer);
    }
}