import { View } from "react-native"
import { CityContain, ContainUser, InformationContent, PhotoContain, UserContain } from "../../components/Contain/style"
import { ButtonTitle, LabelUser, SubTextQuick, TitleUser } from "../../components/Title/style"
import { InputCity, InputUser } from "../../components/Input/style"
import { ButtonEdit, ButtonExit, ButtonUser } from "../../components/Button/style"

export const UserProfile = () => {

    return (
        <ContainUser contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            <PhotoContain>
                <UserContain source={require('../../assets/images/man.png')} />

                <InformationContent>

                    <TitleUser>Richard Kosta</TitleUser>
                    <SubTextQuick>richard.kosta@gmail.com</SubTextQuick>

                </InformationContent>
            </PhotoContain>

            <LabelUser>Data de Nascimento</LabelUser>
            <InputUser style={{ fontFamily: 'MontserratAlternates_500Medium' }}
                placeholder="04/05/1999"
                placeholderTextColor="#33303E" />

            <LabelUser>CPF</LabelUser>
            <InputUser style={{ fontFamily: 'MontserratAlternates_500Medium' }}
                placeholder="859********"
                placeholderTextColor="#33303E" />

            <LabelUser>Endereço</LabelUser>
            <InputUser style={{ fontFamily: 'MontserratAlternates_500Medium' }}
                placeholder="Rua Vicenso Silva, 987"
                placeholderTextColor="#33303E" />

            <CityContain>
                <View>
                    <LabelUser>CEP</LabelUser>
                    <InputCity style={{ fontFamily: 'MontserratAlternates_500Medium' }}
                        placeholder="06548-909"
                        placeholderTextColor="#33303E"
                    />
                </View>

                <View>
                    <LabelUser>Cidade</LabelUser>
                    <InputCity style={{ fontFamily: 'MontserratAlternates_500Medium' }}
                        placeholder="Moema-SP"
                        placeholderTextColor="#33303E" />
                </View>
            </CityContain>

            <ButtonUser>
                <ButtonTitle>Salvar</ButtonTitle>
            </ButtonUser>

            <ButtonEdit>
                <ButtonTitle>Editar</ButtonTitle>
            </ButtonEdit>

            <ButtonExit>
                <ButtonTitle>Sair do APP</ButtonTitle>
            </ButtonExit>
        </ContainUser>
    )
}