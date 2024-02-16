import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export const Contain = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: white;
`

export const ContainIcons = styled.View`
    align-self: flex-start;
    margin-left: 20px;
    z-index: 1000;
    position: absolute;
    top: 20px;
`

export const ContainUser = styled.ScrollView`
flex: 1;
background-color: white;
`

export const InformationContent = styled.View`
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: 70px;
    background-color: #FFFFFF;
    border: 1px solid white;
    elevation: 10;
    width: 80%;
    border-radius: 5px;
    height: 120px;
`

export const ContentAccount = styled.View`
    flex-direction: row;
    margin-top: 30px;
    justify-content: center;
    align-items: center; 
    gap: 15px;
`

export const PhotoContain = styled.View`
    width: 100%;
    align-items: center;
    height: 330px;
`



export const CityContain = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 35px;
`

export const UserContain = styled.Image`
    width: 100%;
    height: 280px;
`

export const HeaderContain = styled(LinearGradient).attrs({
    colors: ['#60BFC5', '#496BBA'],
    start: { x: -0.05, y: 1.08 },
    end: { x: 1, y: 0 }
})`
    width: 100%;
    height: 102px;
    padding: 20px;
    padding-bottom: 22px;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 0px 0px 15px 15px;
    box-shadow: 0px 4px 15px #00000014;
`