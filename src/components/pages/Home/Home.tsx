import { useState } from 'react'

import { Grid } from 'components/layouts/Grid'
import { Sidebar } from 'components/layouts/Sidebar'
import { Stack } from 'components/layouts/Stack'
import { CharacterCard } from 'components/specific/CharacterCard'
import { ScrollToTop } from 'components/specific/ScrollToTop'
import { useScroll } from 'hooks/useScroll'
import { SCALE } from 'styles/variables'
import { generateMockNpc } from 'mocks/characterMock'
import { ICharacter } from 'types'

export const Home = () => {
    const [npcList, setNpcList] = useState<ICharacter[]>([])
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setNpcList([...npcList, generateMockNpc()])
    }

    const isScroll = useScroll()

    return (
        <Sidebar>
            <section style={{ padding: SCALE.s2 }}>
                <Stack>
                    <h1>Your party walks into the tavern</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="submit" value="Generate NPC" />
                    </form>
                    {npcList.length > 0 ? <h2>Current NPCs</h2> : null}
                    <nav>
                        <Stack as="ul">
                            {npcList.map((npc, i) => {
                                return (
                                    <li
                                        key={`link-${npc.firstName}-${npc.lastName}-${i}`}
                                    >
                                        <a
                                            href={`#${npc.firstName}-${npc.lastName}-${i}`}
                                        >{`${npc.firstName} ${npc.lastName}`}</a>
                                    </li>
                                )
                            })}
                        </Stack>
                    </nav>
                </Stack>
            </section>
            <main id="main">
                <Grid>
                    {npcList.map((npc, i) => {
                        return (
                            <CharacterCard
                                id={`${npc.firstName}-${npc.lastName}-${i}`}
                                key={`card-${npc.firstName}-${npc.lastName}-${i}`}
                                {...npc}
                            />
                        )
                    })}
                </Grid>
                <ScrollToTop hasScrolledDown={isScroll} targetID="#main" />
            </main>
        </Sidebar>
    )
}
