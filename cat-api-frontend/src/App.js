import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

function Restaurant () {
  // const { id } = useParams()
  const [cat, setCat] = useState()

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(`http://localhost:1337/api/restaurants/${id}?populate[image][populate]=*&populate[dishes][populate]=*&populate[adresse][populate]=*`)
      if (response.status === 200) {
        const data = response.data.data
        setCat(data)
      }
    }
    loadData()
  }, [])
  return(

  )
}
