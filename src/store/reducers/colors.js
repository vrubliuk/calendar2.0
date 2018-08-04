const initialState = {
  colors: {
    white: {
      dark: "#e6e6e6",
      light: "#ffffff"
    },
    yellow: {
      dark: "#ffd966",
      light: "#fff2cc"
    },
    orange: {
      dark: "#f6b26b",
      light: "#fce5cd"
    },
    green: {
      dark: "#93c47d",
      light: "#d9ead3"
    },
    cyan: {
      dark: "#76a5af",
      light: "#d0e0e3"
    },
    blue: {
      dark: "#6fa8dc",
      light: "#cfe2f3"
    },
    purple: {
      dark: "#8e7cc3",
      light: "#d9d2e9"
    },
    pink: {
      dark: "#c27ba0",
      light: "#ead1dc"
    },
    red: {
      dark: "#e06666",
      light: "#f4cccc"
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
