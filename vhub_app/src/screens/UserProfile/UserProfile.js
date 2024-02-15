import { View } from "react-native"
import { CityContain, ContainUser, InformationContent, PhotoContain, UserContain } from "../../components/Contain/style"
import { ButtonTitle, LabelUser, TitleUser } from "../../components/Title/style"
import { InputCity, InputUser } from "../../components/Input/style"
import { ButtonEdit, ButtonExit, ButtonUser } from "../../components/Button/style"
import { SubTextQuickSB } from "../../components/Text/style"

export const UserProfile = () => {

    return (
        <ContainUser contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            <PhotoContain>
                <UserContain source={require('../../assets/images/handsome_man.jpg')} />

                <InformationContent>

                    <TitleUser>Gustavo Magalhães "The Dog"</TitleUser>
                    <SubTextQuickSB>gustavonascimento928@gmail.com</SubTextQuickSB>

                </InformationContent>
            </PhotoContain>

            <LabelUser>Data de Nascimento</LabelUser>
            <InputUser style={{ fontFamily: 'MontserratAlternates_500Medium' }}
                placeholder="17/02/2005"
                placeholderTextColor="#33303E" />

            <LabelUser>CPF</LabelUser>
            <InputUser style={{ fontFamily: 'MontserratAlternates_500Medium' }}
                placeholder="538********"
                placeholderTextColor="#33303E" />

            <LabelUser>Endereço</LabelUser>
            <InputUser style={{ fontFamily: 'MontserratAlternates_500Medium' }}
                placeholder="Rua da Liberdade, 151"
                placeholderTextColor="#33303E" />

            <CityContain>
                <View>
                    <LabelUser>CEP</LabelUser>
                    <InputCity style={{ fontFamily: 'MontserratAlternates_500Medium' }}
                        placeholder="09405-560"
                        placeholderTextColor="#33303E"
                    />
                </View>

                <View>
                    <LabelUser>Cidade</LabelUser>
                    <InputCity style={{ fontFamily: 'MontserratAlternates_500Medium' }}
                        placeholder="Ribeirão Pires-SP"
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