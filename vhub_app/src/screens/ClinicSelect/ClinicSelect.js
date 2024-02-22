import { Container } from "../../components/Contain/style"
import { ClinicSelectCard } from "../../components/Card/index"
import { Title } from "../../components/Title/style"


export const ClinicSelect = () => {
    return (
        <Container>
            <Title>Selecionar Clínica</Title>
            <ClinicSelectCard />
        </Container>
    )
}