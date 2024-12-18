import { MovieContainer } from "./styled";

export default function MovieCard({movie}) {
    return (
        <MovieContainer>
            <img src={movie.posterURL} alt={movie.title}/>
        </MovieContainer>
    )
}