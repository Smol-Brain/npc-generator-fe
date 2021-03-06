import { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { deleteNpc } from 'api/deleteNPC'
import { saveNpc } from 'api/saveNPC'
import { Stack } from 'components/layouts/Stack'
import { Grid } from 'components/layouts/Grid'
import { ANIMATION_TIME, SCALE } from 'styles/variables'
import { ICharacter } from 'types'

import { CharacterContainer } from './styled'
interface ICharacterCardProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'id'>,
        ICharacter {
    anchorId: string
}

const CARD_SCALE = SCALE['s0']

export const CharacterCard = ({
    anchorId,
    firstName,
    gender,
    height,
    id,
    job,
    languages,
    lastName,
    lifeStage,
    negativeTraits,
    neutralTraits,
    positiveTraits,
    pronouns,
    quirk,
    race,
    userId,
    wealth,
    ...rest
}: ICharacterCardProps) => {
    const [isMounted, setIsMounted] = useState(false)
    // Ignore flicker on transition
    const [isShown, setIsShown] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
    const [currentCharacterId, setCurrentCharacterId] = useState(id)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const handleCharacterSave = async () => {
        if (!userId) return
        const character = {
            firstName,
            gender,
            height,
            job,
            languages,
            lastName,
            lifeStage,
            negativeTraits,
            neutralTraits,
            positiveTraits,
            pronouns,
            quirk,
            race,
            id: currentCharacterId,
            userId,
            wealth,
        }

        const savedNPC = await saveNpc({
            character,
        })

        if (savedNPC) {
            setCurrentCharacterId(savedNPC.data.id)
            setIsSaved(true)
        }
    }

    const handleCharacterDelete = async () => {
        if (!currentCharacterId) {
            return
        }

        deleteNpc({ id: currentCharacterId })
    }

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
                    <h2 id={anchorId}>
                        {firstName} {lastName}
                    </h2>
                    <p>{`${gender} - ${race} - ${pronouns}`}</p>

                    <Grid>
                        <div>
                            <h3>Mental</h3>
                            <p>
                                <strong>Speaks:</strong>{' '}
                                {languages.join(', \n')}
                            </p>
                            <p>
                                <strong>Quirk: </strong>
                                {quirk}
                            </p>
                        </div>
                        <div>
                            <h3>Physical</h3>
                            <p>
                                <strong>Life Stage:</strong> {lifeStage}
                            </p>
                            <p>
                                <strong>Height:</strong> {height}
                            </p>
                        </div>
                        <div>
                            <h3>Lifestyle</h3>
                            <p>
                                <strong>Wealth: </strong>
                                {wealth}
                            </p>
                        </div>
                        <div>
                            <h3>Traits</h3>
                            <p>
                                <strong>Positive: </strong>
                                {positiveTraits.join(', \n')}
                            </p>
                            <p>
                                <strong>Neutral: </strong>
                                {neutralTraits.join(', \n')}
                            </p>
                            <p>
                                <strong>Negative: </strong>
                                {negativeTraits.join(', \n')}
                            </p>
                        </div>
                    </Grid>
                    {userId && (
                        <button
                            onClick={
                                isSaved
                                    ? handleCharacterDelete
                                    : handleCharacterSave
                            }
                        >
                            {isSaved ? 'Remove' : 'Save'}
                        </button>
                    )}
                </Stack>
            </CharacterContainer>
        </CSSTransition>
    )
}
