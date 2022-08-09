import rallax from 'rallax.js'


document.addEventListener('DOMContentLoaded', () => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0)
    }

    const image = document.querySelector('.parallax-image')
    const imageContainer = document.querySelector('.container')
    const imageContainerRect = imageContainer.getBoundingClientRect()
    const winHeight = window.innerHeight

    const imageTop = -(window.innerHeight * 0.3) * 2
    // const imageHeight = imageContainerRect.height + (winHeight * 0.3)
    const imageHeight = winHeight*0.3
    // const imageWidth = imageContainerRect.width + 200
    const imageWidth = 1000
    const imageLeft = -100

    Object.assign(image.style, {
        position: 'relative',
        top: `${imageTop}px`,
        left: `${imageLeft}px`,
        height: `${imageHeight}px`,
        width: `${imageWidth}px`,
    })

    const imageParallax = rallax(image, {mobilePx: 600})
})