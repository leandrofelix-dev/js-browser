const browser = document.querySelector('#window')
const iframe = document.querySelector('iframe')
const input = document.querySelector('#url_text')
const close = document.querySelector('#close')
const safari = document.querySelector('#browser-icon')

close.addEventListener('click', () => {
    browser.style.display = 'none'
})

input.addEventListener('change', () => {
    iframe.src = input.value
})

safari.addEventListener('click', () => {
    browser.style.display = 'block'
})

