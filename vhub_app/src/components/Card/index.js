import { RealizedScheduleTime, RealizedTimeContainer, ScheduleContainer, ScheduleTime } from "../ScheduleCard/style";
import { CardClinicContainer, CardClinicContent, CardContainer, CardContainerText, CardLinkText, RealizedCardLinkText } from "./style";
import { SubTitleCard, SubTitleCardAge, SubTitleCardAvaliation } from "../Title/style";
import { UserProfilePhotoCard } from "../UserProfilePhoto/style";
import { AntDesign } from '@expo/vector-icons';
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


export const ClinicSelectCard  = () => {
    return(
        <CardClinicContainer>
            <CardClinicContent>
                <TitleCard>Clínica Natureh</TitleCard>
                <SubTitleCardAvaliation><AntDesign name="star" size={16} color="#F9A620" />4,2</SubTitleCardAvaliation>
            </CardClinicContent>
        </CardClinicContainer>
    )
}