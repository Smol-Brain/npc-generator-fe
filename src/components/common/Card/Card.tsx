import { Box } from 'components/layouts/Box'
import { IBoxProps } from 'components/layouts/Box/Box'
import { Stack } from 'components/layouts/Stack'
import { BORDER, COLORS } from 'styles/variables'

export const Card = ({ children, ...rest }: IBoxProps) => {
    return (
        <Box
            lightColor={COLORS.light}
            darkColor={COLORS.dark}
            borderWidth={BORDER.thick}
            {...rest}
        >
            <Stack>{children}</Stack>
        </Box>
    )
}
