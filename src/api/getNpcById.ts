import { ICharacter } from 'types'

const getNpcEndpoint = process.env.REACT_APP_NPC_API_SAVE

interface IGenerateNPCResponse {
    data: ICharacter
}

export const getNpcById = async (id: string) => {
    const response = await fetch(`${getNpcEndpoint}/${id}`, {
        method: 'GET',
    })
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`
        throw new Error(message)
    } else {
        const data = await response.json()

        return data as IGenerateNPCResponse
    }
}
