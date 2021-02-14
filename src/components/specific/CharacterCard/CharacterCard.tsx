import { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { Stack } from 'components/layouts/Stack'
import { ANIMATION_TIME, SCALE } from 'styles/variables'
import { ICharacter } from 'types'

import { CharacterContainer } from './styled'
interface ICharacterCardProps
    extends ICharacter,
        React.HTMLAttributes<HTMLDivElement> {}

const CARD_SCALE = SCALE['s0']

export const CharacterCard = ({
    firstName,
    gender,
    height,
    id,
    job,
    lastName,
    lifeStage,
    pronouns,
    race,
    wealth,
    ...rest
}: ICharacterCardProps) => {
    const [isMounted, setIsMounted] = useState(false)
    // Ignore flicker on transition
    const [isShown, setIsShown] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <CSSTransition
            classNames="fade-in"
            in={isMounted}
            timeout={ANIMATION_TIME}
            onEntered={() => {
                setIsShown(true)
            }}
        >
            <CharacterContainer
                className={isShown ? 'shown' : ''}
                borderWidth="0"
                {...rest}
            >
                <Stack space={CARD_SCALE}>
                    <h2 id={id}>
                        {firstName} {lastName}
                    </h2>
                    <p>{`${gender} - ${race} - ${pronouns}`}</p>
                    <ul>
                        <li>Age: {lifeStage}</li>
                        <li>Height: {height}</li>
                    </ul>
                </Stack>
                <Stack space={CARD_SCALE}>
                    <h3>Life style</h3>
                    <ul>
                        <li>Job: {job}</li>
                        <li>Wealth: {wealth}</li>
                    </ul>
                </Stack>
            </CharacterContainer>
        </CSSTransition>
    )
}
