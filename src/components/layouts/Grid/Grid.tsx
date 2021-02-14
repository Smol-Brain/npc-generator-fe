import { SCALE } from 'styles/variables'

import { GridContainer } from './styled'

export interface IGridProps extends React.HTMLAttributes<HTMLDivElement> {
    minWidth?: string
    space?: string
}

export const Grid = ({
    children,
    minWidth = '250px',
    space = SCALE.s1,
    ...rest
}: IGridProps) => {
    return (
        <GridContainer minWidth={minWidth} space={space} {...rest}>
            {children}
        </GridContainer>
    )
}
