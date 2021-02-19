import { Icon } from 'components/layouts/Icon'

import { ScrollLink } from './styled'

export interface IScrollToTop {
    hasScrolledDown: boolean
    targetID: string
}

export const ScrollToTop = ({ hasScrolledDown, targetID }: IScrollToTop) => {
    return (
        <ScrollLink
            hasScrolledDown={hasScrolledDown}
            href={targetID}
            targetID={targetID}
        >
            <Icon iconId="arrow" space="0" aria-label="Scroll to top" />
        </ScrollLink>
    )
}
