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
import { ICharacter, IFirebaseUser } from 'types'
import { auth, getUser, signInWithGoogle } from 'utils/firebase'

export const Home = () => {
    const [npcList, setNpcList] = useState<ICharacter[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [currentUserId, setCurrentUserId] = useState<string>('')
    const { user } = useContext(UserContext)
    const isScroll = useScroll()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        const newNPC = await generateNpc()

        setIsLoading(false)
        setNpcList([...npcList, { ...newNPC.data, userId: currentUserId }])
    }

    const handleSignout = () => {
        auth.signOut()
    }

    const handleNewUser = async (user: IFirebaseUser) => {
        const appUser = await getUser(user)

        if (appUser) {
            const newNPCList = npcList.map(npc => {
                return { ...npc, userId: appUser.id }
            })

            setCurrentUserId(appUser.id)
            setNpcList(newNPCList)
        }
    }

    useEffect(() => {
        if (!user) {
            return
        }

        handleNewUser(user)
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
                    {npcList.length > 0 ? (
                        <nav>
                            <h2>New Characters</h2>
                            <Stack as="ul">
                                {npcList.map(
                                    ({ firstName, id, lastName }, i) => {
                                        return (
                                            <li key={`link-${firstName}-${i}`}>
                                                <a
                                                    href={`#${
                                                        id ? id : firstName
                                                    }-${i}`}
                                                >{`${firstName} ${lastName}`}</a>
                                            </li>
                                        )
                                    }
                                )}
                            </Stack>
                        </nav>
                    ) : null}
                </Stack>
            </section>
            <main id="main">
                <Stack>
                    <h2>New Characters</h2>
                    {npcList.map(({ firstName, id, ...rest }, i) => {
                        return (
                            <CharacterCard
                                anchorId={`${id ? id : firstName}-${i}`}
                                firstName={firstName}
                                id={id}
                                key={`card-${firstName}-${i}`}
                                {...rest}
                            />
                        )
                    })}
                    <h2>Saved Characters</h2>
                </Stack>
                <ScrollToTop hasScrolledDown={isScroll} targetID="#main" />
            </main>
        </Sidebar>
    )
}
