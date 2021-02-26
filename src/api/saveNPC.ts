import { ICharacter } from 'types'

const saveNpcEndpoint = process.env.REACT_APP_NPC_API_SAVE

interface ISaveNPCResponse {
    data: ICharacter
}

interface ISaveNpcProps {
    character: ICharacter
}

export const saveNpc = async ({ character }: ISaveNpcProps) => {
    const response = await fetch(saveNpcEndpoint, {
        method: 'POST',
        body: JSON.stringify(character),
    })
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`
        throw new Error(message)
    } else {
        const data = await response.json()

        return data as ISaveNPCResponse
    }
}
