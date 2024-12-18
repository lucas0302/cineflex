import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import SessionCard from "../../components/SessionCard/SessionCard";
import { PageContainer } from "./styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export default function SessionsPage() {
    const [movie, setMovie] = useState(undefined);
    let { idFilme } = useParams();

    idFilme = idFilme.replace(/[^0-9]/g, "");

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${idFilme}/showtimes`)
            .then(res => setMovie(res.data))
            .catch(err => console.log('erro', err.response.data))
    }, [])

    if (!movie || !movie.days) {
        return <div>Carregando ou dados não disponíveis...</div>;
    }

    return (
        <PageContainer>
            Selecione o horário
            <div>
                {movie.days.map((s) => (
                    <SessionCard key={s.id} session={s}/>
                ))}


            </div>

            <Footer posterURL={movie.posterURL} title={movie.title} />
        </PageContainer>
    )
}
