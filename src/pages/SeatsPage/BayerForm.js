import { FormContainer } from "./styled";
export default function BayerForm() {

    return (
        <FormContainer>
            Nome do Comprador:
            <input placeholder="Digite seu nome..." />

            CPF do Comprador:
            <input placeholder="Digite seu CPF..." />

            <button>Reservar Assento(s)</button>
        </FormContainer>
    );
}