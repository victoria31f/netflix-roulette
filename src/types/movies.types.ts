export type Movie = {
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    runtime: number;
    genres: Genres[];
    id: number;
};

export type MoviesResponse = {
    data: Movie[];
    totalAmount: number;
    offset: number;
    limit: number;
};

export type Genres = "" | "Comedy" | "Documentary" | "Horror" | "Crime";
