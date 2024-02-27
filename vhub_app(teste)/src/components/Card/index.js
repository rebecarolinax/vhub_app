import { RealizedScheduleTime, RealizedTimeContainer, ScheduleClinicContainer, ScheduleContainer, ScheduleTime } from "../ScheduleCard/style";
import { CardClinicContainer, CardClinicContent, CardContainer, CardContainerText, CardLinkText, RealizedCardLinkText } from "./style";
import { SubTitleCard, SubTitleCardAge, SubTitleCardAvaliation, SubTitleCardScore, SubTitleClinicCard, SubTitleMedicCard } from "../Title/style";
import { UserProfilePhotoCard } from "../UserProfilePhoto/style";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { TitleCard } from "../Title/style";

export const AppointmentCard = ({ img, name, age, query, schedule, email, situation, onPressAppoiment, onPressCancel }) => {
    return (
        <CardContainer>
            <UserProfilePhotoCard source={img} />
            <CardContainerText>
                <TitleCard>{name}</TitleCard>
                <SubTitleCardAge>{age} • <SubTitleCard>{query}</SubTitleCard></SubTitleCardAge>
                {situation == 'pendente' ? (
                    <ScheduleContainer>
                        <ScheduleTime> <AntDesign name="clockcircle" size={14} color="#49B3BA" />  {schedule}</ScheduleTime>
                    </ScheduleContainer>
                ) : (
                    <RealizedTimeContainer>
                        <RealizedScheduleTime> <AntDesign name="clockcircle" size={14} color="#4E4B59" />  {schedule}</RealizedScheduleTime>
                    </RealizedTimeContainer>
                )}
            </CardContainerText>
            {situation == 'pendente' ? (
                <CardLinkText onPress={onPressCancel}> Cancelar </CardLinkText>
            ) : (null)}
            {situation == 'realizada' ? (
                <RealizedCardLinkText onPress={onPressAppoiment}>Ver Prontuário</RealizedCardLinkText>
            ) : (<CardLinkText>           </CardLinkText>)}
        </CardContainer >
    )
}


export const ClinicSelectCard = ({ id, clinicName, onPress, select, score, city, uf, days }) => {
    return (
        <CardClinicContainer clickButton={select} onPress={onPress}>
            <>
                <CardClinicContent>
                    <TitleCard>{clinicName}</TitleCard>
                    <SubTitleCardScore><AntDesign name="star" size={16} color="#F9A620" />{score}</SubTitleCardScore>
                </CardClinicContent>

                <CardClinicContent>
                    <SubTitleClinicCard>{city}, {uf}</SubTitleClinicCard>
                    <ScheduleClinicContainer>
                        <ScheduleTime><MaterialCommunityIcons name="calendar-outline" size={16} color="#49B3BA" /> {days}</ScheduleTime>
                    </ScheduleClinicContainer>
                </CardClinicContent>
            </>
        </CardClinicContainer>
    )
}

export const MedicSelectCard = ({ id, img, medicName, speciality }) => {
    return (
        <CardContainer>
            <UserProfilePhotoCard source={img} />
            <CardContainerText>
                <TitleCard>{medicName}</TitleCard>
                <SubTitleMedicCard>{speciality}</SubTitleMedicCard>
            </CardContainerText>
        </CardContainer>
    )
}