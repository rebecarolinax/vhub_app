
import { AntDesign } from "@expo/vector-icons"
import { Button } from "../../components/Button/Style"
import { CancelTitle, Hour } from "../../components/CardPaciente/Style"
import { Container } from "../../components/Container/Style"
import { CalendarIcon, StarIcon } from "../../components/Logo/Style"
import { ButtonTitle, Title } from "../../components/Title/Style"
import { AvaliationInfo,  CancelLink,  CardContent, DayInfo, OtherContent, StarText, TextClinic, TextContainer } from "./Style"

export const ClinicSelect = ({ navigation }) => {
    return(
        <Container>
            <Title style={{ marginTop: 30, marginBottom: 70 }}>Selecionar clínica</Title>

            <CardContent>
            <TextContainer>
                <Title style={{ fontSize: 16, marginBottom: 0, width: '70%' }}>Clínica Natureh</Title>
                <TextClinic>São Paulo, SP</TextClinic>  
            </TextContainer>

            <OtherContent>
                <AvaliationInfo>
                <AntDesign name="star" size={20} color="#F9A620" />
                <StarText>4,5</StarText> 
                </AvaliationInfo>
                

                <DayInfo>
                <AntDesign name="calendar" size={17} color="#49B3BA" />
                <Hour>Seg-Sex</Hour>
                </DayInfo> 
             </OtherContent>     
         
            </CardContent>


            <CardContent>
            <TextContainer>
                <Title style={{ fontSize: 16, marginBottom: 0, width: '100%' }}>Clinica Villa Lobos</Title>
                <TextClinic>São Paulo, SP</TextClinic>  
            </TextContainer>

            <OtherContent>
                <AvaliationInfo>
                <AntDesign name="star" size={20} color="#F9A620" />
                <StarText>4,2</StarText> 
                </AvaliationInfo>
                

                <DayInfo>
                <AntDesign name="calendar" size={17} color="#49B3BA" />
                <Hour>Seg-Sex</Hour>
                </DayInfo> 
             </OtherContent>     
         
            </CardContent>

            <CardContent>
            <TextContainer>
                <Title style={{ fontSize: 16, marginBottom: 0, width: '100%' }}>Diamond Pró-Mulher</Title>
                <TextClinic>Taboão, SP</TextClinic>  
            </TextContainer>

            <OtherContent>
                <AvaliationInfo>
                <AntDesign name="star" size={20} color="#F9A620" />
                <StarText>4,8</StarText> 
                </AvaliationInfo>
                

                <DayInfo>
                <AntDesign name="calendar" size={17} color="#49B3BA" />
                <Hour>Seg-Sab</Hour>
                </DayInfo> 
             </OtherContent>     
         
            </CardContent>

            <CardContent>
            <TextContainer>
                <Title style={{ fontSize: 16, marginBottom: 0, width: '100%' }}>SP Oncologia Clínica</Title>
                <TextClinic>Taboão, SP</TextClinic>  
            </TextContainer>

            <OtherContent>
                <AvaliationInfo>
                <AntDesign name="star" size={20} color="#F9A620" />
                <StarText>4,2</StarText> 
                </AvaliationInfo>
                

                <DayInfo>
                <AntDesign name="calendar" size={17} color="#49B3BA" />
                <Hour>Seg-Sab</Hour>
                </DayInfo> 
             </OtherContent>     
            </CardContent>

            <Button 
            onPress={() => navigation.replace("DoctorSelect")}
            style={{ marginTop: 20 }}>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

          <CancelLink onPress={() => navigation.replace("PacienteConsultas")}>Cancelar</CancelLink>

            </Container>
    )
}