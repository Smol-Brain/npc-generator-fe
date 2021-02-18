import { useEffect, useState } from 'react'

export const useScroll = () => {
    const [isPastPixel, setIsPastPixel] = useState(false)

    useEffect(() => {
        const pixel = document.querySelector('#scroll-pixel')

        let observer = new IntersectionObserver(entries => {
            if (entries[0].boundingClientRect.y < 0) {
                setIsPastPixel(true)
            } else {
                setIsPastPixel(false)
            }
        })

        if (pixel && document) {
            observer.observe(pixel)
        }
    }, [])

    return isPastPixel
}
