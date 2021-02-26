const deleteNpcEndpoint = process.env.REACT_APP_NPC_API_DELETE

interface IDeleteNPCResponse {
    data: string
}

interface IDeleteNpcProps {
    id: string
}

export const deleteNpc = async ({ id }: IDeleteNpcProps) => {
    const response = await fetch(`${deleteNpcEndpoint}/${id}`, {
        method: 'DELETE',
    })
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`
        throw new Error(message)
    } else {
        const data = await response.json()

        return data as IDeleteNPCResponse
    }
}
