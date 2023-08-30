import './About_a.css'

export default function About_a({theme , about , img1 , img2 , img3 ,img4 }) {
  return (
    <div className="About_a">
        <h1>{theme}</h1> <br /> <br />
        <p>{about}</p>
        <br /> <br /> <hr /> <br /> <br />
        <div className="img">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
        <br /> <br /> <hr /> <br /> <br />
    </div>
  )
}
