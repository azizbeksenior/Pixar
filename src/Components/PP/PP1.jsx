import './PP1.css'

export default function PP1({li1 , li2 , li3 , li4 , img , img1 , img2 , img3}) {
  return (
    <div className="PP1">
        <ul>
            <li>{li1}</li> <br />
            <li>{li2}</li> <br />
            <li>{li3}</li> <br />
            <li id='PP1_li'>
                <img src={img} alt="" />
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </li> <br />
            <li>{li4}</li>
        </ul><br /><br /><br /><br /> <hr/> <br /><br />
    </div>
  )
}
