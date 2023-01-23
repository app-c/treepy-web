import { animated } from '@react-spring/web'
import styled, { css } from 'styled-components'
import { color } from '../../../styles/colors'

interface Props {
  type: 'success' | 'error' | 'info'
  description: boolean
}

const variation = {
  info: css`
    background-color: #ebf8ff;
    color: #3172b7;
  `,

  success: css`
    background-color: #e6fffa;
    color: #2e656a;
  `,

  error: css`
    background-color: #fddede;
    color: #c53030;
  `,
}

export const Toast = styled.div<Props>`
  width: 360px;
  position: relative;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;
  background-color: ${color.green[10]};

  & + div {
    margin-top: 8px;
  }

  ${(h) => variation[h.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
  }

  ${(h) =>
    !h.description &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`
