import Footer from "../../components/Footer/Footer";
import Seat from "../../components/Seat/Seat";
import { PageContainer, SeatsContainer, CaptionContainer, CaptionItem, CaptionCircle, FormContainer } from "./styled";

export default function SeatsPage() {

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>

                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />

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

            <Footer />

        </PageContainer>
    )
}
