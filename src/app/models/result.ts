import { Movie } from "./movie";

export interface Result {
    Search: Movie[];
    totalResults: string;
    Response: string;
}