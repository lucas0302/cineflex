import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Seat from "../../components/Seat/Seat";
import { PageContainer, SeatsContainer } from "./styled";
import { useEffect, useState } from "react";
import axios from 'axios';
import { BASE_URL } from "../../constants/urls";
import Caption from "./Caption";
import BayerForm from "./BayerForm";

export default function SeatsPage({ setSuccessInfo }) {
    const { idSessao } = useParams();
    const [session, setSession] = useState(undefined);
    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/showtimes/${idSessao}/seats`)
            .then(res => setSession(res.data))
            .catch(err => console.log(err.response.data))
    }, []);

    if (session === undefined) {
        return <div>Carregando...</div>;
    }

    function handleSeat(seat) {
        if (!seat.isAvailable) {
            alert("Esse assento não está dosponivel")
        } else {
            const isSelected = selectedSeats.some((s) => s.id === seat.id);

            if (isSelected) {  //removendo assentos da lista de selecionados 
                const newList = selectedSeats.filter((s) => s.id !== seat.id);
                setSelectedSeats(newList);
            } else {          //adicionando assentos da lista de selecionados
                setSelectedSeats([...selectedSeats, seat])
            }
            console.log(isSelected)
        }
    }

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {session.seats.map((seat) => (
                    <Seat
                        key={seat.id}
                        seat={seat}
                        handleSeat={() => handleSeat(seat)}
                        isSelected={selectedSeats.some((s) => s.id === seat.id)}
                    />
                ))}
            </SeatsContainer>

            <Caption />
            <BayerForm 
            selectedSeats={selectedSeats}
            setSuccessInfo={setSuccessInfo}
            session={session}
            />

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
