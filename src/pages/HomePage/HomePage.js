import MovieCard from "../../components/MovieCard/MovieCard";
import {PageContainer,ListContainer} from "./styled";

export default function HomePage() {
    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>
                <MovieCard/>

                <MovieCard/>

                <MovieCard/>

                <MovieCard/>
                
            </ListContainer>

        </PageContainer>
    )
}

