import { ButtonEdit, ButtonUser } from "../../components/Button/style"
import { ContainUser, InformationContent, PhotoContain, UserContain } from "../../components/Contain/style"
import { Input, InputProntuary } from "../../components/Input/style"
import { TextResend } from "../../components/Link/style"
import { ButtonTitle, LabelProntuary, LabelUser, SubTextQuick, TitleUser } from "../../components/Title/style"

export const Prontuary = () => {
    return (
        <ContainUser contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>

            <PhotoContain>
                <UserContain source={require('../../assets/images/man.png')} />
                <InformationContent>
                    <TitleUser>Richard Kosta</TitleUser>
                    <SubTextQuick>22 anos       richard.kosta@gmail.com</SubTextQuick>
                </InformationContent>
            </PhotoContain>

            <LabelUser>Descrição da Consulta</LabelUser>
            <InputProntuary style={{ fontFamily: 'MontserratAlternates_500Medium' }}
                placeholder="Descrição"
                placeholderTextColor="#34898F"
            />

            <LabelProntuary>Diagnóstico do Paciente</LabelProntuary>
            <Input style={{ fontFamily: 'MontserratAlternates_500Medium' }}
                placeholder="Diagnóstico"
                placeholderTextColor="#34898F"
            />

            <LabelProntuary>Prescrição Médica</LabelProntuary>
            <InputProntuary style={{ fontFamily: 'MontserratAlternates_500Medium' }}
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