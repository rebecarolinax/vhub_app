import { HeaderContainer, HeaderUserProfile, HeaderUserProfileText } from "../../components/Header/style"
import { UserProfilePhotoHeader } from "../../components/UserProfilePhoto/style"
import { TitleHeader, SubTitle } from "../../components/Title/style"
import { FontAwesome } from '@expo/vector-icons'

export const Header = ({userPhoto, userName}) => {
    return (
        <HeaderContainer>
            <HeaderUserProfile>
                <UserProfilePhotoHeader source={userPhoto} />
                <HeaderUserProfileText>
                    <SubTitle>Bem vindo(a)</SubTitle>
                    <TitleHeader>{userName}</TitleHeader>
                </HeaderUserProfileText>
            </HeaderUserProfile>
            <FontAwesome name="bell" size={24} color="white" />
        </HeaderContainer>
    )
}