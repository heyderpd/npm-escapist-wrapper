const mousemove = 'mousemove'
let started = false
let callBack = x => x

const getMousePosition = evt => {
  try {
    const { pageX, pageY } = evt
    callBack(pageX, pageY)
  } catch (error) {}
}

export const startTracker = _callBack => {
  try {
    if (started) {
      throw new Error("need stop first")
    }

    callBack = _callBack
    document.addEventListener(mousemove, getMousePosition, false)

  } catch (error) {
    console.error(error)
  }
}

export const stopTracker = _ => {
  document.removeEventListener(mousemove, getMousePosition)
  started = false
}
