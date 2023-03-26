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

  <div class="competences">
    <h3>Ses Compétences de classe</h3>
    <table>
      <tr>
        <td>Adaptabilité :</td>
        <td>Niveau {cat.adaptability}</td>
      </tr>
      <tr>
        <td>Affection :</td>
        <td>Niveau {cat.affection_level}</td>
      </tr>
      <tr>
        <td>Energie :</td>
        <td>Niveau {cat.energy_level}</td>
      </tr>
      <tr>
        <td>Intelligence :</td>
        <td>Niveau {cat.intelligence}</td>
      </tr>
      <tr>
        <td>Besoin Social :</td>
        <td>Niveau {cat.social_needs}</td>
      </tr>
      <tr>
        <td>Rareté :</td>
        <td>Niveau {cat.rare}</td>
      </tr>
      <tr>
        <td>Vie intérieur :</td>
        <td>Niveau {cat.indoor}</td>
      </tr>
    </table>
  </div>
</div>


    </>
   );
}

export default Footer ;