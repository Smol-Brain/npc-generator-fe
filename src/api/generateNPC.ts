import { ICharacter } from 'types'

const generateNpcEndpoint = process.env.REACT_APP_NPC_API_GENERATE

interface IGenerateNPCResponse {
    data: ICharacter
}

export const generateNpc = async () => {
    const response = await fetch(generateNpcEndpoint, {
        method: 'POST',
    })
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`
        throw new Error(message)
    } else {
        const data = await response.json()

        return data as IGenerateNPCResponse
    }
}
