import { Movie } from "./movie";

export interface ExtendedMovie extends Movie{
    Released: string;
    Language: string;
    Plot: string;
    Runtime: string;
}