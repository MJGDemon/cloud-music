import React, { useEffect, useRef } from 'react'

function LazyLoad(props) {
  const { children } = props

  const ref = useRef(null)
  const flag = useRef(null)
  useEffect(() => {
    if (flag.current) {
      const imgs = Array.from(ref.current.querySelectorAll('img'))
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
    // console.log(imgs, ref.current)
    // if(!ioRef.current){
    //   const io = new IntersectionObserver((entires) => {
    //     entires.forEach(e => {
    //       if(e.isIntersecting){
    //         e.target.src = e.target.dataset.src
    //         io.unobserve(e.target)
    //       }
    //     })
    //   })
    //   io.observe(ref.current.children[0])
    // }
  })
  useEffect(() => {
    flag.current = true
  })
  return (
    <div ref={ref}>
      {children}
    </div>
  )
}

export default LazyLoad
