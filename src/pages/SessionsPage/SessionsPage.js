import Footer from "../../components/Footer/Footer";
import SessionCard from "../../components/SessionCard/SessionCard";
import { PageContainer } from "./styled";

export default function SessionsPage() {

    return (
        <PageContainer>
            Selecione o horário
            <div>
                <SessionCard />
                <SessionCard />
                <SessionCard />
            </div>

            <Footer />
        </PageContainer>
    )
}
