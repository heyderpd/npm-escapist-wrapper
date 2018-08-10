import { getElementPosition, getFinalPosition } from './wrapper-vetor'

const { abs } = Math

let interval_id
const interval_time = 333 / 2
const velocity = 0.1
const positionTolerance = 6 // dX + dY = 6 px

/*
TODO:
* setPosition from here, bind this fx
* limit position by window and elm body
*/

const intervalProcess = (element, final, setPosition) => {
  const { start } = getElementPosition(element)
  const newPostion = {
    x: start.x * (1 - velocity) + final.x * velocity,
    y: start.y * (1 - velocity) + final.y * velocity,
  }
  console.log('intervalProcess', newPostion)
  setPosition(newPostion)
  testStopCondition(start, newPostion)
}


const testStopCondition = (start, final) => {
  const diff = abs(start.x - final.x) + abs(start.y - final.y)
  if (diff <= positionTolerance) {
    console.log('testStopCondition')
    clearInterval(interval_id)
  }
}

const initializeInterval = (element, final, setPosition) => {
  clearInterval(interval_id)
  interval_id = setInterval(
    () => intervalProcess(element, final, setPosition),
    interval_time
  )
}

export const doMove = (element, mousePosition, setPosition) => {
  const position = getElementPosition(element)
  const final = getFinalPosition(position, mousePosition)
  initializeInterval(element, final, setPosition)
}
