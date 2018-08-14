import * as actionTypes from "../actions/actionTypes";
import { updateState } from "../utility/updateState";

const initialState = {
  calendarDate: new Date(),
  editorDate: new Date(),
  hoveredDayId: null,
  chosenMondays: [],
  draggedType: null,
  previousRoute: null
};

const previousMonth = (state) => {
  return updateState(state, { calendarDate: new Date(state.calendarDate.setMonth(state.calendarDate.getMonth() - 1)) });
};
const nextMonth = (state) => {
  return updateState(state, { calendarDate: new Date(state.calendarDate.setMonth(state.calendarDate.getMonth() + 1)) });
};
const hoverDay = (state, action) => {
  return updateState(state, { hoveredDayId: action.id });
};
const previousYear = (state) => {
  return updateState(state, { editorDate: new Date(state.editorDate.setFullYear(state.editorDate.getFullYear() - 1)) });
};
const nextYear = (state) => {
  return updateState(state, { editorDate: new Date(state.editorDate.setFullYear(state.editorDate.getFullYear() + 1)) });
};
const toggleMondaySelection = (state, action) => {
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
};
const clearChosenMondays = (state) => {
  return updateState(state, { chosenMondays: [] });
};
const setDraggedType = (state, action) => {
  return updateState(state, { draggedType: action.payload });
};
const setPreviousRoute = (state, action) => {
  return updateState(state, { previousRoute: action.payload });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PREVIOUS_MONTH:
      return previousMonth(state);
    case actionTypes.NEXT_MONTH:
      return nextMonth(state);
    case actionTypes.HOVER_DAY:
      return hoverDay(state, action);
    case actionTypes.PREVIOUS_YEAR:
      return previousYear(state);
    case actionTypes.NEXT_YEAR:
      return nextYear(state);
    case actionTypes.TOGGLE_MONDAY_SELECTION:
      return toggleMondaySelection(state, action);
    case actionTypes.CLEAR_CHOSEN_MONDAYS:
      return clearChosenMondays(state);
    case actionTypes.SET_DRAGGED_TYPE:
      return setDraggedType(state, action);
    case actionTypes.SET_PREVIOUS_ROUTE:
      return setPreviousRoute(state, action);
    default:
      return state;
  }
};

export default reducer;
