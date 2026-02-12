const API_KEY = ""  // Add your TMDB API key here when you have one
const BASE_URL = "https://api.themoviedb.org/3"

// Hardcoded movie data (works without API key)
const fallbackMovies = [
    { id: 1, title: "RRR", release_date: "2022-03-25", overview: "A tale of two legendary revolutionaries and their journey far away from home.", poster_path: null, vote_average: 7.8 },
    { id: 2, title: "Master", release_date: "2021-01-13", overview: "An alcoholic professor is sent to a juvenile school, where he clashes with a charismatic gangster.", poster_path: null, vote_average: 6.8 },
    { id: 3, title: "Vikram", release_date: "2022-06-03", overview: "A special agent investigates a case connected to a masked serial killer.", poster_path: null, vote_average: 7.5 },
    { id: 4, title: "Leo", release_date: "2023-10-19", overview: "A mild-mannered cafe owner fights back when a powerful gangster threatens his peaceful life.", poster_path: null, vote_average: 6.5 },
    { id: 5, title: "Jailer", release_date: "2023-08-10", overview: "A retired jailer goes on a manhunt to find his son's killers.", poster_path: null, vote_average: 7.1 },
    { id: 6, title: "KGF Chapter 2", release_date: "2022-04-14", overview: "Rocky, now the king of Kolar Gold Fields, faces new threats from powerful enemies.", poster_path: null, vote_average: 7.4 },
    { id: 7, title: "Ponniyin Selvan", release_date: "2022-09-30", overview: "An epic story of the Chola dynasty and the power struggles within their empire.", poster_path: null, vote_average: 7.0 },
    { id: 8, title: "Pushpa", release_date: "2021-12-17", overview: "A laborer rises in the world of red sandalwood smuggling.", poster_path: null, vote_average: 6.9 },
    { id: 9, title: "Beast", release_date: "2022-04-13", overview: "A spy on a vacation gets caught up in a hijack situation at a mall.", poster_path: null, vote_average: 5.5 },
    { id: 10, title: "Vettaiyan", release_date: "2024-10-10", overview: "A police officer faces moral dilemmas in his pursuit of justice.", poster_path: null, vote_average: 6.2 },
]

export const fetchMovies = async () => {
    // If no API key, return fallback data
    if (!API_KEY) {
        return fallbackMovies
    }

    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US`)
    const data = await response.json()
    return data.results
}

export const searchMovies = async (query) => {
    // If no API key, filter fallback data
    if (!API_KEY) {
        return fallbackMovies.filter(movie =>
            movie.title.toLowerCase().includes(query.toLowerCase())
        )
    }

    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    const data = await response.json()
    return data.results
}