import { FontAwesome } from '@expo/vector-icons'
import { HeaderUserProfile, HeaderUserProfileData } from './style'
import { SubTextQuickSB } from "../../components/Text/style"
import { Title } from '../Title/style'

import { HeaderContain } from '../Contain/style'
import { PhotoUser } from '../Photo/style'

export const Header = () => {
    return (
        <HeaderContain>

            <HeaderUserProfile>

                <PhotoUser source={require('../../assets/images/bilubilu.jpg')} />

                <HeaderUserProfileData>

                    <SubTextQuickSB style={{ right: 9, color: '#4E4B59', fontSize: 14, fontWeight: 600 }}>Bem Vinda</SubTextQuickSB>
                    <Title style={{ fontSize: 15, color: 'white', marginTop: 2 }}>Dra. Rebeca</Title>

                </HeaderUserProfileData>

            </HeaderUserProfile>

            <FontAwesome style={{ marginTop: 18, marginRight: 10 }} name="heart" size={25} color="white" />

        </HeaderContain>
    )
}