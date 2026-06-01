import React from 'react'
import useFetchPlanet from './planet_hooks/fetchPlanet'
import './planet_css/planet.css'


function Planet() {
  const { planetData, loading, error } = useFetchPlanet('https://anurella.github.io/json/planets.json');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(planetData);

  return (
    <div className='planet'>
      <div className='planet_text'>
        <h3>Visualizing the Differences Between Planets</h3>
<p>Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight how vastly different terrestrial planets are from gas giants and ice giants.</p>
    
      </div>
      <div className='planet_image_container'>
        {Array.isArray(planetData) && planetData.length > 0 ? (
          planetData.map((planet, index) => (
            <div key={index} className='planet_card'>
              <div className='image_container'>

              <img src={planet.image} alt={planet.name} /> 
              </div>
              <div className='planet_info'>
                <p>Planet name:{planet.planet}</p>
                <p> Distance from Sun: {planet.distanceFromSun}</p>
              </div>
            </div>
          ))
        ) : (
          <div>No planet data available.</div>
        )}


      </div>
      </div>
  )
}

export default Planet