import '../styles/footer.css'

function Footer ({cat}) {
  return ( 
    <>
    <div>
      <h3>Informations sympa mais sans plus</h3>
      <p>Son tempérament : {cat.temperament}</p>
      <p>Sa durée de vie : {cat.life_span}</p>
    </div>

    <div>
      <h3>Ses Compétences de classe</h3>
      <p>Adaptabilité : {cat.adaptability} points</p>
    </div>

    </>
   );
}

export default Footer ;