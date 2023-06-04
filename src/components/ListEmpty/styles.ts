import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Message = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_300};
    ` }
    text-align: center;
`