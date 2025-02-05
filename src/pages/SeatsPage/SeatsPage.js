import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Seat from "../../components/Seat/Seat";
import { PageContainer, SeatsContainer, CaptionContainer, CaptionItem, CaptionCircle, FormContainer } from "./styled";
import { useEffect, useState } from "react";
import axios from 'axios';
import { BASE_URL } from "../../constants/urls";

export default function SeatsPage() {
    const { idSessao } = useParams();
    const [session, setSession] = useState(undefined);

    useEffect(() => {
        axios.get(`${BASE_URL}/showtimes/${idSessao}/seats`)
        .then(res => setSession(res.data))
        .catch(err => console.log(err.response.data))
    }, []);

    if (session === undefined) {
        return <div>Carregando...</div>;
    }

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {session.seats.map((s) => (
                    <Seat key={s.id} seat={s} />
                ))}
            </SeatsContainer>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle />
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle />
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle />
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainer>
                Nome do Comprador:
                <input placeholder="Digite seu nome..." />

                CPF do Comprador:
                <input placeholder="Digite seu CPF..." />

                <button>Reservar Assento(s)</button>
            </FormContainer>

            {session.movie && (
                <Footer
                    posterURL={session.movie.posterURL}
                    title={session.movie.title}
                    weekday={session.day.weekday}
                    hour={session.name}
                />
            )}
        </PageContainer>
    );
}
