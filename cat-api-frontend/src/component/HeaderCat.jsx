import { useEffect, useState } from 'react'
import '../styles/header-img.css'

function CatImg ({cat_img}) {

  const [bounds, setBounds] = useState(null)

  // Fonction qui permet de faire tourner l'image de chat en fonction de la position de la souris
  useEffect(() => {
    const $card = document.querySelector('.image-cat img')
    function rotateToMouse (e) {
      if (!bounds) return

      const mouseX = e.clientX
      const mouseY = e.clientY
      const leftX = mouseX - bounds.x
      const topY = mouseY - bounds.y
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      }
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2)

      $card.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `
      }
      function handleMouseEnter () {
        const bounds = $card.getBoundingClientRect()
        setBounds(bounds)
        document.addEventListener('mousemove', rotateToMouse)
      }
  
      function handleMouseLeave () {
        document.removeEventListener('mousemove', rotateToMouse)
        $card.style.transform = ''
        $card.style.background = ''
      }
  
      $card.addEventListener('mouseenter', handleMouseEnter)
      $card.addEventListener('mouseleave', handleMouseLeave)
  
      return () => {
        $card.removeEventListener('mouseenter', handleMouseEnter)
        $card.removeEventListener('mouseleave', handleMouseLeave)
        document.removeEventListener('mousemove', rotateToMouse)
      }
    }, [bounds])

  return ( 
    <>
    <div className='image-cat'>
      <img src={cat_img.url}/>
    </div>
    
    </>
   )
}

export default CatImg ;