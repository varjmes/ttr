const WPM = 200
const textBox = document.getElementById('textbox')
const progress = document.getElementById('progress')

function calculateTtr () {
  const textContent = textBox.value.trim();
  if (!textContent) return '0 minute read'

  const ttr = textContent.split(/\s/g).length / WPM
  return `${Math.ceil(ttr)} minute read`
}

function setTtr () {
  return document.getElementById('result').textContent = calculateTtr()
}

function clearText() {
  return textBox.textContent = ''
}

function setProgressMax () {
  return progress.setAttribute('max', textBox.scrollHeight)
}

function setCurrentProgress () {
  return progress.setAttribute('value', textBox.scrollTop + textBox.clientHeight)
}

// The scroll height of the textarea changes depending on the size of the window, so here
// we can update the max value of the progress bar when a resize happens
window.addEventListener('resize', function () {
  setProgressMax()
})

// The progress bar tells us how much of the text we've read, which we update when we scroll
// through the text
textBox.addEventListener('scroll', function () {
  setCurrentProgress()
})

// Add and removing text will change the height of the textarea, which in turn will change the
// max value of the progress bar
textBox.addEventListener('input', function () {
  setProgressMax()
})

document.getElementById('button').addEventListener('click', setTtr)
document.getElementById('clear').addEventListener('click', clearText)

setProgressMax()
setCurrentProgress()
