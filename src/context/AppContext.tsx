import React, { createContext, useContext, useReducer } from 'react';

export interface AppState {
  user: { name: string } | null;
  language: 'de' | 'en';
  isSplit: boolean;
}

export type AppReduceAction =
  | {
      type: 'set-user';
      user: AppState['user'];
    }
  | { type: 'set-language'; language: AppState['language'] }
  | { type: 'set-split'; split: boolean };

function initialState(): AppState {
  if (location.search.startsWith('?embedded')) {
    let lang = location.search.replace('?embedded', '') || 'en';
    if (lang !== 'en' && lang !== 'de') {
      lang = 'en';
    }
    return {
      user: { name: 'Max Mustermann' },
      language: lang as 'en' | 'de',
      isSplit: false,
    };
  }
  return { user: null, language: 'en', isSplit: false };
}

const AppContext = createContext<AppState>(initialState());
const AppDispatchContext = createContext<
  React.Dispatch<React.ReducerAction<typeof appReducer>>
>(() => {
  throw new Error('unimplemented');
});

export function AppProvider({ children }: { children?: React.ReactNode }) {
  const [tasks, dispatch] = useReducer(appReducer, initialState());

  return (
    <AppContext.Provider value={tasks}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}

export function useAppDispatch() {
  return useContext(AppDispatchContext);
}

function appReducer(state: AppState, action: AppReduceAction): AppState {
  switch (action.type) {
    case 'set-user': {
      return { ...state, user: action.user };
    }
    case 'set-language': {
      return { ...state, language: action.language };
    }
    case 'set-split': {
      return { ...state, isSplit: action.split };
    }
    default: {
      throw Error(`Unknown action: ${action}`);
    }
  }
}
