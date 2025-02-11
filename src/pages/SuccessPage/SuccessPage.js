
import { Link } from "react-router-dom";
import { PageContainer, TextContainer } from "./styled";
export default function SuccessPage({ successInfo }) {

    const { movie, date, hour, buyer, cpf, seats } = successInfo

    return (
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer>
                <strong><p>Filme e sessão</p></strong>
                <p>{movie}</p>
                <p>{date}-{hour}</p>
            </TextContainer>

            <TextContainer>
                <strong><p>Ingressos</p></strong>

                {seats.map((s) => <p key={s}>Assento: {s}</p>)}

            </TextContainer>

            <TextContainer>
                <strong><p>Comprador</p></strong>
                <p>Nome: {buyer}</p>
                <p>CPF: {cpf}</p>
            </TextContainer>
            <Link to="/">
            <button>Voltar para Home</button>
            </Link>

        </PageContainer>
    )
}

