export interface AppState {
    searchValue: string;
    isValid: boolean;
    apiResult: any;
    loading: boolean;
    error: string | null;
    warning: string | null;
}
