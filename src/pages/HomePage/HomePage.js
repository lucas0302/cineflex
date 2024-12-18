import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { PageContainer, ListContainer } from "./styled";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage() {
    const [movies, setMovies] = useState(undefined);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies`)
            .then(res => {
                setMovies(res.data);
            })
            .catch(
                err => console.log(err.response.data)
            )
    }, []);
    if (movies === undefined) {
        return <div>Carregando...</div>
    }
    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>
                {movies.map((m) => (
                    <Link to={`/sessoes/:${m.id}`}key={m.id}>
                        <MovieCard movie={m} />
                    </Link>
                ))}

            </ListContainer>

        </PageContainer>
    )
}

