import CalendarStrip from "react-native-calendar-strip"
import { Contain } from "../../components/Contain/style"
import { Header } from "../../components/Header/header"
import { Title } from "../../components/Title/style"

export const DoctorHome = () => {
    return (
        <Contain>
            <Header />

            <Title
                style={{ color: '#4E4B59', marginRight: 150, marginTop: 20 }}
            >
                Novembro 2023
            </Title>
            <CalendarStrip
                style={{ height: 100, width: '100%', marginTop: 0 }}
                dateNumberStyle={{ color: '#5F5C6B' }}
                dateNameStyle={{ color: '#ACABB7', marginBottom: 10 }}
                highlightDateNameStyle={{ color: '#60BFC5' }}
                highlightDateNumberStyle={{ color: 'white', backgroundColor: '#60BFC5', height: 30, width: 30, borderRadius: 15, textAlignVertical: 'center' }}
                showMonth={false}
                scrollable={true}
            />



        </Contain>
    )
}