import { useContext, useEffect, useState } from 'react'
import 'firebase/auth'

import { generateNpc } from 'api/generateNPC'
import { CharacterCard } from 'components/specific/CharacterCard'
import { ScrollToTop } from 'components/specific/ScrollToTop'
import { Sidebar } from 'components/layouts/Sidebar'
import { Stack } from 'components/layouts/Stack'
import { UserContext } from 'components/contexts/UserProvider'
import { SCALE } from 'styles/variables'
import { useScroll } from 'hooks/useScroll'
import { ICharacter } from 'types'
import { auth, generateUserDocument, signInWithGoogle } from 'utils/firebase'

export const Home = () => {
    const [npcList, setNpcList] = useState<ICharacter[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { user } = useContext(UserContext)
    const isScroll = useScroll()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        const newNPC = await generateNpc()

        setIsLoading(false)
        setNpcList([...npcList, newNPC.data])
    }

    const handleSignout = () => auth.signOut()

    useEffect(() => {
        if (!user) {
            return
        }

        const newUser = generateUserDocument(user)

        console.log(newUser)
    }, [user])

    return (
        <Sidebar>
            <section style={{ padding: SCALE.s2 }}>
                <Stack>
                    <h1>Your party walks into the tavern</h1>
                    {!user && (
                        <button onClick={signInWithGoogle}>
                            Sign in with Google
                        </button>
                    )}
                    {user && <button onClick={handleSignout}>Sign out</button>}
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
