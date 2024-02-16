import CalendarStrip from "react-native-calendar-strip"
import { Contain } from "../../components/Contain/style"
import { Header } from "../../components/Header/header"
import { Title } from "../../components/Title/style"
import Calendar from "../../components/Calendar/calendar"
import { ButtonHome, ButtonRowHome } from "../../components/Button/style"
import { TextMedicalOptions } from "../../components/Text/style"
import { CardPatient, CardPatientColumnImg, ImgCardPacient } from "../../components/Card/style"

export const DoctorHome = () => {
    return (

        <Contain>

            <Header />

            <Calendar />

            <ButtonRowHome>

                <ButtonHome style={{ backgroundColor: '#496BBA' }}>
                    <TextMedicalOptions style={{ color: 'white' }}>Agendadas</TextMedicalOptions>
                </ButtonHome>

                <ButtonHome>
                    <TextMedicalOptions>Realizadas</TextMedicalOptions>
                </ButtonHome>

                <ButtonHome>
                    <TextMedicalOptions>Canceladas</TextMedicalOptions>
                </ButtonHome>

            </ButtonRowHome>

            <CardPatient>
                <CardPatientColumnImg>
                    <ImgCardPacient source={require('../../assets/images/bilubilu.jpg')} />
                </CardPatientColumnImg>


            </CardPatient>




        </Contain>
    )
}