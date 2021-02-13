import { Card } from 'components/common/Card'
import { Stack } from 'components/layouts/Stack'
import { SCALE } from 'styles/variables'
import { ICharacter } from 'types'

interface ICharacterCardProps
    extends ICharacter,
        React.HTMLAttributes<HTMLDivElement> {}

const CARD_SCALE = SCALE['s0']

export const CharacterCard = ({
    race,
    gender,
    pronouns,
    firstName,
    lastName,
    job,
    wealth,
    lifeStage,
}: ICharacterCardProps) => {
    return (
        <Card>
            <Stack space={CARD_SCALE}>
                <h2>
                    {firstName} {lastName}
                </h2>
                <p>{`${gender} - ${race} - ${pronouns}`}</p>
                <ul>
                    <li>LifeStage: {lifeStage}</li>
                </ul>
            </Stack>
            <Stack space={CARD_SCALE}>
                <h3>Life style</h3>
                <ul>
                    <li>Job: {job}</li>
                    <li>Wealth: {wealth}</li>
                </ul>
            </Stack>
        </Card>
    )
}
