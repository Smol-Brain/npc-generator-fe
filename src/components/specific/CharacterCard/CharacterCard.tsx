import { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { Stack } from 'components/layouts/Stack'
import { Grid } from 'components/layouts/Grid'
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
    hook,
    job,
    languages,
    lastName,
    lifeStage,
    negativeTraits,
    neutralTraits,
    positiveTraits,
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
                    <p>Age: {lifeStage}</p>
                    <p>Height: {height}</p>
                    <h3>Languages</h3>
                    <ul>
                        {languages.map(language => {
                            return <li>{language}</li>
                        })}
                    </ul>
                </Stack>
                <Grid>
                    <div>
                        <h3>Hook</h3>
                        <p>{hook}</p>
                    </div>
                    <div>
                        <h3>Positive</h3>
                        <ul>
                            {positiveTraits.map(trait => {
                                return <li>{trait}</li>
                            })}
                        </ul>
                    </div>
                    <div>
                        <h3>Neutral</h3>
                        <ul>
                            {neutralTraits.map(trait => {
                                return <li>{trait}</li>
                            })}
                        </ul>
                    </div>
                    <div>
                        <h3>Negative</h3>
                        <ul>
                            {negativeTraits.map(trait => {
                                return <li>{trait}</li>
                            })}
                        </ul>
                    </div>

                    <div>
                        <h3>Life style</h3>
                        <ul>
                            <li>Job: {job}</li>
                            <li>Wealth: {wealth}</li>
                        </ul>
                    </div>
                </Grid>
            </CharacterContainer>
        </CSSTransition>
    )
}
