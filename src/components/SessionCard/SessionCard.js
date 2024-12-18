import { Link } from "react-router-dom";
import { SessionContainer, ButtonsContainer } from "./styled";

export default function SessionCard({ session }) {
    const { weekday, date, showtimes } = session
    return (
        <SessionContainer>
            {weekday} - {date}
            <ButtonsContainer>
                {showtimes.map((time) => (
                    <Link to={`/assentos/${time.id}`} key={time.id}>
                        <button>{time.name}</button>
                    </Link>
                ))}

            </ButtonsContainer>
        </SessionContainer>

    )
}