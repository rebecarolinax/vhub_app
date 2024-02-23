import { Button, ButtonTitle, SecondaryButton, SecondaryButtonText } from "../../components/Button/style"
import { Container } from "../../components/Contain/style"
import { DoctorSelectCardList } from "../../components/CardList/index"
import { Title } from "../../components/Title/style"

const medicCards = [
    {
        id: '1',
        img: { uri: "https://avatars.githubusercontent.com/u/125309990?v=4" },
        medicName: 'Dra Rebeca',
        speciality: 'Demartologa, Esteticista'
    },
    {
        id: '2',
        img: { uri: "https://avatars.githubusercontent.com/u/125309990?v=4" },
        medicName: 'Dra Rebeca',
        speciality: 'Demartologa, Esteticista'
    },
    {
        id: '3',
        img: { uri: "https://avatars.githubusercontent.com/u/125309990?v=4" },
        medicName: 'Dra Rebeca',
        speciality: 'Demartologa, Esteticista'
    },
    {
        id: '4',
        img: { uri: "https://avatars.githubusercontent.com/u/125309990?v=4" },
        medicName: 'Dra Rebeca',
        speciality: 'Demartologa, Esteticista'
    },
]


export const DoctorSelect = () => {
    return (
        <Container>
            <Title style={{ marginTop: 40, marginBottom: 40 }}>Selecionar Médico</Title>

            <DoctorSelectCardList
                cardsData={medicCards}
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