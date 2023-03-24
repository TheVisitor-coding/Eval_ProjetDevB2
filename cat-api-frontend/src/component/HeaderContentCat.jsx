import '../styles/header-content.css'
import { TiWorld } from 'react-icons/ti'


function ContentCat({cat}) {
  return ( 
    <div className='header-content'>
      <h2>{cat.name}</h2>
      <p className='content'>{cat.description}</p>
      <div className='origin'>
      <TiWorld size={35} />
      <p>{cat.origin}</p>
      </div>
      <a href={cat.wikipedia_url}>Page Wikipedia</a>
  </div>
   )
}

export default ContentCat;