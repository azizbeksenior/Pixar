import './PP.css'

export default function PP({img , theme , li , li1 ,li2 ,li3}) {
  return (
    <div className="PP">
        <img src={img} alt="" />
        <div className="PP1">
            <h1>{theme}</h1>
            <ul>
                <li>{li}</li>
                <li>{li1}</li>
                <li>{li2}</li>
                <li>{li3}</li>
            </ul>
        </div>
    </div>
  )
}
