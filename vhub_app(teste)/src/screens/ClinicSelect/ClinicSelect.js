import { Container } from "../../components/Contain/style"
import { Title } from "../../components/Title/style"
import { ClinicCardList } from "../../components/CardList"
import { Button, ButtonTitle, SecondaryButton, SecondaryButtonText } from "../../components/Button/style"

const clinicCards = [
    { id: 1, clinicName: 'Clínica Natureh', score: '4,5', city: 'São Paulo', uf: 'SP', days: 'Seg-Sex', select: true },
    { id: 2, clinicName: 'Diamond Pró-Mulher', score: '4,8', city: 'São Paulo', uf: 'SP', days: 'Seg-Sex', select: false },
    { id: 3, clinicName: 'Clínica Villa Lobos', score: '4,2', city: 'Taboão', uf: 'SP', days: 'Seg-Sab', select: false },
    { id: 4, clinicName: 'SP Oncologia Clínica', score: '4,2', city: 'Taboão', uf: 'SP', days: 'Seg-Sab', select: false },
]

export const ClinicSelect = () => {
    return (
        <Container>
            <Title style={{ marginTop: 25, marginBottom: 10 }}>Selecionar Clínica</Title>


            <ClinicCardList style={{}}
                cardsData={clinicCards}
            />

            <Button>
                <ButtonTitle>Confirmar</ButtonTitle>
            </Button>

            <SecondaryButton style={{ margin: 50 }}>
                <SecondaryButtonText>Cancelar</SecondaryButtonText>
            </SecondaryButton>
        </Container>
    )
}