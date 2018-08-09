const { abs, min, max } = Math
const maxDistance = 100

const getElementPosition = element => {
  const { offsetHeight, offsetWidth, offsetLeft, offsetTop } = element
  const center = {
    wrapperX: offsetLeft + offsetWidth / 2,
    wrapperY: offsetTop + offsetHeight / 2,
  }
  const startPoint = {
    start: offsetLeft,
    end: offsetTop,
  }
  const endPoint = {
    start: offsetLeft + offsetWidth,
    end: offsetTop + offsetHeight,
  }
  return {
    center,
    startPoint,
    endPoint,
  }
}

const getDistance = ({ wrapperX, wrapperY }, { mouseX, mouseY }) => {
  const moveToLeft = wrapperX <= mouseX ? -1 : 1
  const moveToTop = wrapperY <= mouseY ? -1 : 1
  const diffX = min(maxDistance, abs(wrapperX - mouseX))
  const diffY = min(maxDistance, abs(wrapperY - mouseY))
  return { moveToLeft, moveToTop, diffX, diffY }
}

const getMove = (center, mousePosition) => {
  const { moveToLeft, moveToTop, diffX, diffY } = getDistance(center, mousePosition)
  return {
    x: moveToLeft * max(0, maxDistance - diffX),
    y: moveToTop * max(0, maxDistance - diffY),
  }
}

export const getNewPosition = (element, mousePosition, mouseX, mouseY) => {
  const { center } = getElementPosition(element)
  const { x, y } = getMove(center, mousePosition)
  return { x, y }
}
