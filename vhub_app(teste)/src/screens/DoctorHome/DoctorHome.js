import { FilterStatusButton } from "../../components/StatusButton/index";
import { StatusButtonContainer } from "../../components/StatusButton/style"
import { CardList } from "../../components/CardList/index";
import { Container } from "../../components/Contain/style"
import { Calendar } from "../../components/Calendar/index";
import { Header } from "../../components/Header/index";
import { useState } from "react";

const cardsPatient = [
    {
        id: '1',
        img: { uri: 'https://radiocidade.fm/uploads/2021/12/Lana-Del-Rey-4.png' },
        situation: 'pendente',
        name: 'Lana Del Rey',
        age: '38 anos',
        query: 'Rotina',
        schedule: '14:00',
        email: 'lizzy@gmail.com'
    },
    {
        id: '2',
        img: { uri: 'https://radiocidade.fm/uploads/2021/12/Lana-Del-Rey-4.png' },
        situation: 'pendente',
        name: 'Lana Del Rey',
        age: '38 anos',
        query: 'Rotina',
        schedule: '14:00',
        email: 'lizzy@gmail.com'
    },


];


export const DoctorHome = () => {
    const [statusLista, setStatusLista] = useState("pendente");
    return (
        <Container>
            <Header
                userName={'Dra. Rebeca'}
                userPhoto={{ uri: "https://avatars.githubusercontent.com/u/125309990?v=4" }} />
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
                cardsData={cardsPatient}
            />
        </Container>
    )
}