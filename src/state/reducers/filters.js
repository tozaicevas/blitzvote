export default function(state = [], action) {
  switch (action.type) {
    case "FILTER_SET":
        return [
            action.payload
        ]
    case "FILTER_CLEAR":
      return [];
    default:
      return state;
  }
}
