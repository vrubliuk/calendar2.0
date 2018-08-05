import * as actionTypes from "../actions/actionTypes";
import { updateState } from "../utility/updateState";

const initialState = {
  calendarDate: new Date(),
  editorDate: new Date(),
  hoveredDayId: null,
  chosenMondays: [],
  draggedType: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PREVIOUS_MONTH:
      return updateState(state, { calendarDate: new Date(state.calendarDate.setMonth(state.calendarDate.getMonth() - 1)) });

    case actionTypes.NEXT_MONTH:
      return updateState(state, { calendarDate: new Date(state.calendarDate.setMonth(state.calendarDate.getMonth() + 1)) });

    case actionTypes.HOVER_DAY:
      return updateState(state, { hoveredDayId: action.id });

    case actionTypes.PREVIOUS_YEAR:
      return updateState(state, { editorDate: new Date(state.editorDate.setFullYear(state.editorDate.getFullYear() - 1)) });

    case actionTypes.NEXT_YEAR:
      return updateState(state, { editorDate: new Date(state.editorDate.setFullYear(state.editorDate.getFullYear() + 1)) });

    case actionTypes.TOGGLE_MONDAY_SELECTION:
      let chosenMondays = [...state.chosenMondays];
      const passedMonday = {
        id: action.payload.id,
        type: action.payload.type
      };
      const index = chosenMondays.findIndex(monday => {
        return monday.id === passedMonday.id && monday.type === passedMonday.type;
      });
      index > -1 ? chosenMondays.splice(index, 1) : chosenMondays.push(passedMonday);

      return updateState(state, { chosenMondays });

    case actionTypes.CLEAR_CHOSEN_MONDAYS:
      return updateState(state, { chosenMondays: [] });

    case actionTypes.SET_DRAGGED_TYPE:
      return updateState(state, { draggedType: action.payload });

    default:
      return state;
  }
};

export default reducer;
