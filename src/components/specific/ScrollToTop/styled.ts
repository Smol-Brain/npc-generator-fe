import styled from 'styled-components'

import { COLORS, SCALE } from 'styles/variables'

import { IScrollToTop } from './ScrollToTop'

export const ScrollLink = styled.a<IScrollToTop>`
    align-items: center;
    background-color: ${COLORS.dark};
    border-radius: 50%;
    bottom: ${SCALE['s0']};
    color: ${COLORS.light};
    display: flex;
    height: ${SCALE['s0']};
    justify-content: center;
    padding: ${SCALE['s0']};
    position: fixed;
    right: ${props => (props.hasScrolledDown ? SCALE['s0'] : '-30vw')};
    transform: rotate(-90deg);
    transition: right 0.5s ease;
    width: ${SCALE['s0']};

    &:focus {
        right: ${SCALE['s0']};
    }
    svg {
        fill: currentColor;
    }
`
