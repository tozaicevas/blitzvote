import Question from "../../models/Question";
import moment from "moment";

const initialState = [
  new Question(
    1,
    1,
    "Ką manote apie bendrą ES kariuomenę?",
    [2],
    moment("2019-02-09T23:55:00")
  ),
  new Question(
    2,
    1,
    "Ar jūs už dyzelinių automobilių ribojimą?",
    [1],
    moment("2019-02-09T22:00:00")
  ),
  new Question(
    3,
    2,
    "Ar švietimas turi būti suvienodintas tarp valstybių?",
    [3],
    moment("2019-02-09T21:00:00")
  ),
  new Question(
    4,
    3,
    "Ar Vengrija nusipelnė ES sankcijų?",
    [1],
    moment("2019-02-09T11:00:00")
  ),
  new Question(
    5,
    3,
    "Ar ES turėtų glaudžiau bendradarbiauti su Ukraina?",
    [2],
    moment("2019-02-09T04:00:00")
  )
];

export default function(state = initialState, action) {
  switch (action.type) {
    case "QUESTION_INSERT":
      return [...state, action.payload];
    case "QUESTION_UPDATE":
      const newQuestion = action.payload;
      const withoutOld = state.filter(q => q.id !== newQuestion.id);
      return [...withoutOld, newQuestion];
    default:
      return state;
  }
}
