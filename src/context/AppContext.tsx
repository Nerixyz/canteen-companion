import React, { createContext, useContext, useReducer } from 'react';

export interface AppState {
  user: { name: string } | null;
}

export type AppReduceAction = {
  type: 'set-user';
  user: AppState['user'];
};

const initialState: AppState = { user: null };

const AppContext = createContext<AppState>(initialState);
const AppDispatchContext = createContext<
  React.Dispatch<React.ReducerAction<typeof appReducer>>
>(() => {
  throw new Error('unimplemented');
});

export function AppProvider({ children }: { children?: React.ReactNode }) {
  const [tasks, dispatch] = useReducer(appReducer, initialState);

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

function appReducer(_state: AppState, action: AppReduceAction): AppState {
  switch (action.type) {
    case 'set-user': {
      return { user: action.user };
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}
