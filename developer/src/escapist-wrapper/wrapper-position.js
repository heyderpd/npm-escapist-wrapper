const { abs, min, max } = Math
const maxDistance = 150

const getElementPosition = element => {
  const { offsetHeight, offsetWidth, offsetLeft, offsetTop } = element
  const center = {
    x: offsetLeft + offsetWidth / 2,
    y: offsetTop + offsetHeight / 2,
  }
  const start = {
    x: offsetLeft,
    y: offsetTop,
  }
  const end = {
    x: offsetLeft + offsetWidth,
    y: offsetTop + offsetHeight,
  }
  return {
    center,
    start,
    end,
  }
}

const getDistance = ({ x, y }, { mouseX, mouseY }) => {
  const moveToLeft = x <= mouseX ? -1 : 1
  const moveToTop = y <= mouseY ? -1 : 1
  const diffX = min(maxDistance, abs(x - mouseX))
  const diffY = min(maxDistance, abs(y - mouseY))
  return {
    moveX: moveToLeft * max(0, maxDistance - diffX),
    moveY: moveToTop * max(0, maxDistance - diffY),
    distance: (diffX + diffY) / maxDistance
  }
}

const getMove = ({ x, y }, { moveX, moveY, distance }) => {
  console.log(distance, distance >= maxDistance)
  if (distance < 1) {
    return {
      x: x + moveX / 100,
      y: y + moveY / 100,
    }
  } else {
    return { x, y }
  }
}

export const getNewPosition = (element, mousePosition) => {
  const elm = getElementPosition(element)
  const distance = getDistance(elm.center, mousePosition)
  const { x, y } = getMove(elm.start, distance)
  return { x, y }
}
