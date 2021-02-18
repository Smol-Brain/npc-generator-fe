import { Icon } from 'components/layouts/Icon'

import { ScrollLink } from './styled'

export interface IScrollToTop {
    hasScrolledDown: boolean
    target: string
}

export const ScrollToTop = ({ hasScrolledDown, target }: IScrollToTop) => {
    return (
        <ScrollLink
            hasScrolledDown={hasScrolledDown}
            href={target}
            target={target}
        >
            <Icon iconId="arrow" space="0" aria-label="Scroll to top" />
        </ScrollLink>
    )
}
