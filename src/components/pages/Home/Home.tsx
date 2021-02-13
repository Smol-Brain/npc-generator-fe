import { useState } from 'react'

import { CharacterCard } from 'components/specific/CharacterCard'
import { Cover } from 'components/layouts/Cover'
import { Sidebar } from 'components/layouts/Sidebar'
import { Stack } from 'components/layouts/Stack'
import { COLORS, SCALE } from 'styles/variables'
import { generateMockNpc } from 'mocks/characterMock'
import { ICharacter } from 'types'

export const Home = () => {
    const [npcList, setNpcList] = useState<ICharacter[]>([])
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setNpcList([...npcList, generateMockNpc()])
    }

    return (
        <Sidebar>
            <section style={{ padding: SCALE.s2, minHeight: '100vh' }}>
                <Stack recursive>
                    <h1>Your party walks into the tavern</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="submit" value="Generate NPC" />
                    </form>
                </Stack>
            </section>
            <main style={{ padding: SCALE.s2, background: COLORS.light }}>
                <Stack>
                    {npcList.map(npc => {
                        return <CharacterCard {...npc} />
                    })}
                </Stack>
            </main>
        </Sidebar>
    )
}
