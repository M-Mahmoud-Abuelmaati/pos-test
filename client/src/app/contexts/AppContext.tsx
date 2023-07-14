import { IWordType } from "@/types";
import { createContext, useContext, PropsWithChildren, useReducer } from "react";

interface State {
  words: IWordType[];
  rank: number;
  answeredQuestion: number;
  correctQuestion: number;
}

interface ContextValue {
  state: State;
  dispatch: React.Dispatch<any>;
}

// Action Types
const actionTypes = {
  setWords: "setWords",
  setRank: "setRank",
  addAnsweredQuestion: "addAnsweredQuestion",
  addCorrectQuestion: "addCorrectQuestion",
  resetQuestions: "resetQuestions",
};

// action creators

const setWords = (words: IWordType[]) => ({
  type: actionTypes.setWords,
  payload: words,
});

const setRank = (rank: number) => ({
  type: actionTypes.setRank,
  payload: rank,
});

const addAnsweredQuestion = () => ({
  type: actionTypes.addAnsweredQuestion,
});

const addCorrectQuestion = () => ({
  type: actionTypes.addCorrectQuestion,
});

const resetQuestions = () => ({
  type: actionTypes.resetQuestions,
});

// Initial State
const initialState: State = {
  words: [],
  rank: 0,
  answeredQuestion: 0,
  correctQuestion: 0,
};

// Context
const AppContext = createContext<ContextValue>({
  state: initialState,
  dispatch: () => undefined,
});

// Reducer
const appReducer = (state: State, action: any): State => {
  switch (action.type) {
    case actionTypes.setWords:
      return { ...state, words: action.payload };

    case actionTypes.setRank:
      return { ...state, rank: action.payload };

    case actionTypes.addAnsweredQuestion:
      return { ...state, answeredQuestion: state.answeredQuestion + 1 };

    case actionTypes.addCorrectQuestion:
      return { ...state, correctQuestion: state.correctQuestion + 1 };

    case actionTypes.resetQuestions:
      return { answeredQuestion: 0, correctQuestion: 0, rank: 0, words: [] };

    default:
      return state;
  }
};

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

export { setWords, setRank, addAnsweredQuestion, addCorrectQuestion, resetQuestions };
