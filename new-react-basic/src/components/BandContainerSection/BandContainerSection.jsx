import band from "../../assets/band.jpeg"

function BandContainerSection() {
 return (
    // <section id="home">
    <div className="jumbotron">
      <img src={band} alt="our band tampil in LA, Lenteng Agung" />
      <div className="band-caption">
        <h3>Kangen Band</h3>
        <p>Band babang tamvan</p>
      </div>
    </div>
  // </section>
 )

    
}

export default BandContainerSection
