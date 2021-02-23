import { useState } from 'react'

import { generateNpc } from 'api/generateNPC'
import { Sidebar } from 'components/layouts/Sidebar'
import { Stack } from 'components/layouts/Stack'
import { CharacterCard } from 'components/specific/CharacterCard'
import { ScrollToTop } from 'components/specific/ScrollToTop'
import { useScroll } from 'hooks/useScroll'
import { SCALE } from 'styles/variables'
import { ICharacter } from 'types'

export const Home = () => {
    const [npcList, setNpcList] = useState<ICharacter[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        const newNPC = await generateNpc()

        setIsLoading(false)
        setNpcList([...npcList, newNPC.data])
    }

    const isScroll = useScroll()

    return (
        <Sidebar>
            <section style={{ padding: SCALE.s2 }}>
                <Stack>
                    <h1>Your party walks into the tavern</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            disabled={isLoading}
                            type="submit"
                            value="Generate NPC"
                        />
                    </form>
                    {npcList.length > 0 ? <h2>Current NPCs</h2> : null}
                    <nav>
                        <Stack as="ul">
                            {npcList.map(({ firstName, id, lastName }, i) => {
                                return (
                                    <li key={`link-${firstName}-${i}`}>
                                        <a
                                            href={`#${
                                                id ? id : firstName
                                            }-${i}`}
                                        >{`${firstName} ${lastName}`}</a>
                                    </li>
                                )
                            })}
                        </Stack>
                    </nav>
                </Stack>
            </section>
            <main id="main">
                <Stack>
                    {npcList.map(({ firstName, id, ...rest }, i) => {
                        return (
                            <CharacterCard
                                firstName={firstName}
                                id={`${id ? id : firstName}-${i}`}
                                key={`card-${firstName}-${i}`}
                                {...rest}
                            />
                        )
                    })}
                </Stack>
                <ScrollToTop hasScrolledDown={isScroll} targetID="#main" />
            </main>
        </Sidebar>
    )
}
