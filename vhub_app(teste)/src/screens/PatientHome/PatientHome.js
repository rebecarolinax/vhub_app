import { FilterStatusButton } from "../../components/StatusButton/index"
import { StatusButtonContainer } from "../../components/StatusButton/style"
import { Calendar } from "../../components/Calendar/index"
import { Container } from "../../components/Contain/style"
import { CardList } from "../../components/CardList/index"
import { Header } from "../../components/Header/index"
import { useState } from "react"
import { ScheduleAppointmentButton } from "../../components/ScheduleAppointmentButton/index"

const cardsMedic = [{
    id: '1',
    img: { uri: 'https://avatars.githubusercontent.com/u/125309990?v=4' },
    situation: 'pendente',
    name: 'Dra. Rebeca',
    age: '16 anos',
    query: 'Rotina',
    schedule: '14:00',
    email: 'doutor.rebeca@gmail.com',
    crm: 'CRM-15286',
    specialty: 'Clínica Geral'
}];


export const PatientHome = () => {
    const [statusLista, setStatusLista] = useState("pendente");
    return (
        <Container>
            <Header
                userName={'Lana Del Rey'}
                userPhoto={{ uri: "https://radiocidade.fm/uploads/2021/12/Lana-Del-Rey-4.png" }} 
            />
            <Calendar />

            <StatusButtonContainer>
                <FilterStatusButton
                    textButton={"Agendadas"}
                    clickButton={statusLista === "pendente"}
                    onPress={() => setStatusLista("pendente")}
                />

                <FilterStatusButton
                    textButton={"Realizadas"}
                    clickButton={statusLista === "realizada"}
                    onPress={() => setStatusLista("realizada")}
                />
                <FilterStatusButton
                    textButton={"Canceladas"}
                    clickButton={statusLista === "cancelada"}
                    onPress={() => setStatusLista("cancelada")}
                />
            </StatusButtonContainer>

            <CardList
                status={statusLista}
                cardsData={cardsMedic}
            />

            <ScheduleAppointmentButton />

        </Container>
    )
}