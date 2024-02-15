import { FontAwesome } from '@expo/vector-icons'
import { HeaderContain, HeaderUserProfile, HeaderUserProfileText } from './style'
import { SubTextQuickSB } from "../../components/Text/style"
import { Title } from '../Title/style'
import { UserProfilePhotoHeaderContain } from '../Contain/style'

export const Header = () => {
    return (
        <HeaderContain>

            <HeaderUserProfile>

                <UserProfilePhotoHeaderContain source={require('../../assets/images/bilubilu.jpg')} />

                <HeaderUserProfileText style={{ marginTop: 30 }}>

                    <SubTextQuickSB style={{ right: 9, color: '#4E4B59' }}>Bem Vindo</SubTextQuickSB>
                    <Title style={{ fontSize: 15, color: 'white' }}>Dra. Rebeca</Title>

                </HeaderUserProfileText>

            </HeaderUserProfile>

            <FontAwesome style={{ marginTop: 30 }} name="bell" size={18} color="white" />

        </HeaderContain>
    )
}