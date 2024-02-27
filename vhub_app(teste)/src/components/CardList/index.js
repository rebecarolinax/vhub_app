import { AppointmentCard, ClinicSelectCard, MedicSelectCard } from "../../components/Card/index";
import { ModalAppointment } from "../Modal/index";
import { ListCard } from "./style";
import { useState } from "react";

export const CardList = ({ status, cardsData }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ListCard
            data={cardsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => status == item.situation && (
                <>
                    <AppointmentCard
                        situation={item.situation}
                        img={item.img}
                        onPressAppoiment={() => setModalVisible(true)}
                        onPressCancel={() => setModalVisible(true)}
                        name={item.name}
                        age={item.age}
                        query={item.query}
                        schedule={item.schedule}
                        email={item.email}
                        crm={item.crm}
                        speacialty={item.speacialty}
                    />
                    <ModalAppointment
                        visible={modalVisible}
                        onPress={() => setModalVisible(false)}
                        animation={'fade'}
                        transparent={true}
                        img={item.img}
                        name={item.name}
                        age={item.age}
                        email={item.email}
                        situation={item.situation}
                    />
                </>
            )}
        />
    )
}

export const ClinicCardList = ({ cardsData }) => {
    return (
        <ListCard
            data={cardsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
                <ClinicSelectCard
                    id={item.id}
                    clinicName={item.clinicName}
                    score={item.score}
                    city={item.city}
                    uf={item.uf}
                    days={item.days}
                    select={item.select}
                />
            }
        />
    )
}

export const DoctorSelectCardList = ({ cardsData }) => {
    return (
        <ListCard
            data={cardsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
                <MedicSelectCard
                    id={item.id}
                    img={item.img}
                    medicName={item.medicName}
                    speciality={item.speciality}
                />
            }
        />
    )
}