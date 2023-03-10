import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;

  .folha,
  .how,
  .projet,
  .us,
  .calc,
  .folha {
    visibility: hidden;
  }
`

export const ScrollBar = styled.div`
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export const BoxBanner = styled.div`
  /* position: static; */
`

export const Image = styled.img`
  width: 100%;

  opacity: 0.9;
`

export const BoxCalc = styled.div`
  display: flex;
  /* margin-top: 100vh; */
`

export const BoxFolha = styled.div``

export const ContentTextFolha = styled.div``

export const elementCom = styled.div`
  opacity: 1;
`

export const ContentFolha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
