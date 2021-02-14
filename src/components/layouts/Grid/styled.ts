import styled from 'styled-components'

import { IGridProps } from './Grid'

export const GridContainer = styled.div(
    ({ space, minWidth }: IGridProps) => `
      display: grid;
      grid-gap: ${space};

      @supports (width: min(${minWidth}, 100%)) {
          grid-template-columns: repeat(auto-fit, minmax(min(${minWidth}, 100%), 1fr));
      }      
    `
)
