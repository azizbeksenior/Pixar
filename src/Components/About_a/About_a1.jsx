import './About_a1.css'

export default function About_a1({theme , about , img}) {
  return (
    <div className="About_a1">
        <h1>{theme}</h1> <br />
        <p>{about}</p> <br /> <br />
        <img src={img} alt="" /> <br /> <br /> <br /> <hr />
    </div>
  )
}
