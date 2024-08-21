export type AppAction =
    | { type: 'setSearchValue'; payload: string }
    | { type: 'setIsValid'; payload: boolean }
    | { type: 'setApiResult'; payload: any }
    | { type: 'setLoading'; payload: boolean }
    | { type: 'setError'; payload: string | null }
    | { type: 'setWarning'; payload: string | null };
