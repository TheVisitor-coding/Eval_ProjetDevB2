import '../styles/footer.css'

function Footer ({cat}) {
  return ( 
    <>
    <div class="container">
  <div class="informations">
    <h3>Informations sympa mais sans plus</h3>
    <p>Son tempérament : {cat.temperament}</p>
    <p>Sa durée de vie : {cat.life_span}</p>
    <p>Ses surnoms : {cat.alt_names}</p>
    <p>Poids en Metric : {cat.weight.metric}</p>
    <p>Poids en Imperial : {cat.weight.imperial}</p>
  </div>

      {/* <table className="footer">
        <thead>
          <th>Informations un peu cool</th>
          <th>Ses compétences de classe</th>
        </thead>

        <tbody>
          <tr>
            <td>Son tempérament : {cat.temperament}</td>
            <td>Sa durée de vie : {cat.life_span}</td>
            </tr>
          <tr>
            <td>{cat.adaptability} en adaptabilité</td>
          </tr>
        </tbody>
        </table> */}
    </>
   );
}

export default Footer ;