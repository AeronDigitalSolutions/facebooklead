import '../../styles/Contact/Map.css'
const Map = () => {
  return (
   <div className="map-container">
  <iframe
    src="https://www.google.com/maps?q=636%205th%20Ave,%20New%20York&output=embed"
    width="100%"
    height="490"
    // style="border:0; filter: grayscale(100%) contrast(1.1);"
    // allowfullscreen=""
    >
  </iframe>
</div>
  )
}

export default Map
