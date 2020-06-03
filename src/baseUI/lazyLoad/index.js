import React, { useEffect, useRef } from 'react'

function LazyLoad(props) {
  const { children } = props

  const ref = useRef(null)
  useEffect(() => {
    const imgs = Array.from(ref.current.querySelectorAll('img'))
    if (Array.isArray(imgs) && imgs.length) {
      if (imgs.length > 0) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.src = e.target.dataset.src
              io.unobserve(e.target)
            }
          })
        })
        imgs.forEach((e) => {
          io.observe(e)
        })
      }
    }
  })

  return (
    <div ref={ref}>
      {children}
    </div>
  )
}

export default LazyLoad
