import './Personaj.css'

export default function Personaj({theme , about , img1, img2 , img3 , img4 , img5 ,img6 , img7 , img8}) {
  return (
    <div className="Personaj">
        <h1>{theme}</h1> <br/> <br />
        <p>{about}</p> <br /> <br />
        <div className="img">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
        </div>
        <br /><br /> <hr /><br /><br />
    </div>
  )
}
