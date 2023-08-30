import './About_str1.css'

export default function About_str1({theme , li1 , li2 , li3 , li4 , li5 , li6 , li7 , img1 ,img2 , img3 , img4 , img4_1 , img4_2 , img4_3 , img4_4 , img4_5 , img6_1 , img6_2 , img6_3 , img6_4 , img6_5 , img6_6}) {
  return (
    <div className="About_str1">
        <h1>{theme}</h1> <br />
        <ul>
            <li>{li1}</li> <br />
            <li>{li2}</li> <br />
            <li>{li3}</li> <br />
            <li>{li4}</li> <br />
            <li>{li5}</li> <br />
            <li>{li6}</li> <br />
            <li>{li7}</li> <br />
        </ul>
        <div className="img">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
        <div className="img1">
            <img src={img4_1} alt="" />
            <img src={img4_2} alt="" />
            <img src={img4_3} alt="" />
            <img src={img4_4} alt="" />
            <img src={img4_5} alt="" />
        </div>
        <div className="img2">
            <img src={img6_1} alt="" />
            <img src={img6_2} alt="" />
            <img src={img6_3} alt="" />
            <img src={img6_4} alt="" />
            <img src={img6_5} alt="" />
            <img src={img6_6} alt="" />
        </div>
    </div>
  )
}
