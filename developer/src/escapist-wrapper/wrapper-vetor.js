const { abs, min, max } = Math
const maxDistance = 150

export const getElementPosition = element => {
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

const getVetor = ({ x, y }, { moveX, moveY, distance }) => {
  if (distance < 1) {
    return {
      x: x + moveX,
      y: y + moveY,
    }
  } else {
    return { x, y }
  }
}

export const getFinalPosition = ({ center, start }, mousePosition) => {
  const distance = getDistance(center, mousePosition)
  const { x, y } = getVetor(start, distance)
  return { x, y }
}
