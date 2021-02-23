import styled from 'styled-components'

import gritTexture from 'assets/textures/grit.png'
import { Card } from 'components/common/Card'
import { ANIMATION_TIME_MS, COLORS, SCALE } from 'styles/variables'

export const CharacterContainer = styled(Card)`
    background-image: url(${gritTexture});
    position: relative;
    box-shadow: 0 3px 1px rgba(0, 0, 0, 0.05);
    opacity: 0;

    &.shown {
        opacity: 1;
    }

    &.fade-in-enter {
        opacity: 0;
        transform: translateY(${SCALE['s-1']});
    }

    &.fade-in-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: opacity ${ANIMATION_TIME_MS}, transform ${ANIMATION_TIME_MS};
    }

    &.fade-in-exit {
        opacity: 1;
    }
    &.fade-in-exit-active {
        opacity: 0;
        transform: scale(0.9);
        transition: opacity 300ms, transform 300ms;
    }

    &:before,
    &:after {
        content: '';
        height: 0.17em;
        position: absolute;
        left: 0;
        right: 0;
        clip-path: polygon(
            0% 0%,
            5% 100%,
            10% 0%,
            15% 100%,
            20% 0%,
            25% 100%,
            30% 0%,
            35% 100%,
            40% 0%,
            45% 100%,
            50% 0%,
            55% 100%,
            60% 0%,
            65% 100%,
            70% 0%,
            75% 100%,
            80% 0%,
            85% 100%,
            90% 0%,
            95% 100%,
            100% 0%
        );
    }

    &:before {
        background-color: ${COLORS.darkish};
        top: -0.07em;
    }
    &:after {
        background-color: ${COLORS.light};
        bottom: -0.14em;
    }
`
