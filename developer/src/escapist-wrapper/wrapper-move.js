import { getElementPosition, getFinalPosition } from './wrapper-vetor'

/*
TODO:
* setPosition from here, bind this fx
* verify initial x final diff to continue
* limit position by window and elm body
*/
export const doMove = (element, mousePosition, setPosition) => {
  const position = getElementPosition(element)
  const { x, y } = getFinalPosition(position, mousePosition)
  setPosition({ x, y })
}
