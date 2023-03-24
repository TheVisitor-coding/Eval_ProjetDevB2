import { useEffect, useState } from 'react'
import axios from 'axios'
import CatImg from './component/HeaderCat'
import ContentCat from './component/HeaderContentCat'
import './App.css'

function Cat () {
  // let compteur = 0
  const [cat_img, setCat_img] = useState()
  const [cat, setCat] = useState()

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(`https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_mtl9hrEB87yKSbY11iXEkgFZtnsMeZtj2VhYQIJkQNOnRwIJkMleFZlmgHLyDF7p`)
      if (response.status === 200) {
        const data_img = response.data[0]
        const data = response.data[0].breeds[0]

        console.log(data_img)

        setCat_img(data_img)
        setCat(data)
      }
    }
    loadData()
  }, [])

  // const handleRefresh = () => {
  //   useEffect()
  // }

  return cat_img &&(
    <>
      <div className='header'>
        <div className='header-left'>
          <CatImg cat_img={cat_img} />
        </div>

        <div className='header-right'>
          <ContentCat cat={cat} />
          <br/>
          <button>DO YOU WANT A NEW CAT ??</button>
        </div>
      </div>
    </>
  )
}

export default Cat
