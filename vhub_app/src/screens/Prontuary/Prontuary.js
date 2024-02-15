import { ButtonEdit, ButtonUser } from "../../components/Button/style"
import { ContainUser, InformationContent, PhotoContain, UserContain } from "../../components/Contain/style"
import { Input, InputProntuary } from "../../components/Input/style"
import { TextResend } from "../../components/Link/style"
import { ButtonTitle, LabelProntuary, LabelUser, TitleUser } from "../../components/Title/style"
import { SubTextQuickM } from "../../components/Text/style"
export const Prontuary = () => {
    return (
        <ContainUser contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>

            <PhotoContain>
                <UserContain source={require('../../assets/images/handsome_man.jpg')} />
                <InformationContent>
                    <TitleUser>Gustavo Magalhães</TitleUser>
                    <SubTextQuickM>19 anos           gustavonascimento928@gmail.com</SubTextQuickM>
                </InformationContent>
            </PhotoContain>

            <LabelUser>Descrição da Consulta</LabelUser>
            <InputProntuary style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
                placeholder="Descrição"
                placeholderTextColor="#34898F"
            />

            <LabelProntuary>Diagnóstico do Paciente</LabelProntuary>
            <Input style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
                placeholder="Diagnóstico"
                placeholderTextColor="#34898F"
            />

            <LabelProntuary>Prescrição Médica</LabelProntuary>
            <InputProntuary style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
                placeholder="Prescrição Médica"
                placeholderTextColor="#34898F"
            />

            <ButtonUser>
                <ButtonTitle>Salvar</ButtonTitle>
            </ButtonUser>

            <ButtonEdit>
                <ButtonTitle>Editar</ButtonTitle>
            </ButtonEdit>

            <TextResend>Cancelar</TextResend>

        </ContainUser>
    )
}