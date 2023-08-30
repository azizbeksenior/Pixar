import './About_a2.css'

export default function About_a2({img , theme , about}) {
  return (
    <div className="About_a2">
        <img src={img} alt="" />
        <div className="About_a2_1">
            <h1>{theme}</h1> <br />
            <p>{about}</p>
        </div>
        <div className="hr"><hr /></div> <br />
    </div>
  )
}
