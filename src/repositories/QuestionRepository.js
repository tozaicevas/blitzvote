import Question from '../models/Answer';

export class QuestionRepository {
    static data  = [
        new Question(1, 4, 'Ką manote apie bendrą ES kariuomenę?', 2, 5, null),
        new Question(1, 4, 'Ar jūs už dyzelinių automobilių ribojimą?', 1, 1, null),
        new Question(1, 4, 'Ar švietimas turi būti suvienodintas tarp valstybių?', 3, 2, null),
        new Question(1, 4, 'Ar Vengrija nusipelnė ES sankcijų?', 5, 4, null),
        new Question(1, 4, 'Kodėl ES negali bendradarbiauti su Rusija?', 1, 3, null),
    ];

    static getAll = () => {
        return this.data;
    }

    static insert = (question) => {
        this.data.push(question);
    }
}