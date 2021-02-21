import styled from 'styled-components'
import { SCALE } from 'styles/variables'

import { StackContainer } from './styled'

export interface IStackProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: string | React.ComponentType<any>
    recursive?: boolean
    space?: string
    splitAfter?: number
}

export const Stack = ({
    as,
    children,
    recursive = false,
    space = SCALE.s1,
    splitAfter,
    ...rest
}: IStackProps) => {
    return (
        <StackContainer
            as={as}
            recursive={recursive}
            space={space}
            splitAfter={splitAfter}
            {...rest}
        >
            {children}
        </StackContainer>
    )
}
