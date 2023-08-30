import './About_str.css'

export default function About_str({img , img2 , theme , about , about1 , about2 , about3 , img3_1 , img3_2 , img3_3 , img4_1 , img4_2 , img4_3 , img4_4}) {
  return (
    <div className="About_str">
        <img src={img} alt="" id='img_1'/> <br /> <br />
        <h1>{theme}</h1> <br />
        <p>{about}</p> <br />
        <p>{about1}</p><br />
        <p>{about2}</p><br /> 
        <img src={img2} alt="" id='img_2' /> <br />
        <div className="About_str_img3">
          <img src={img3_1} alt="" />
          <img src={img3_2} alt="" />
          <img src={img3_3} alt="" /> <br />
        </div> 
        <div className="About_str_img4">
          <img src={img4_1} alt="" />
          <img src={img4_2} alt="" />
          <img src={img4_3} alt="" />
          <img src={img4_4} alt="" /> <br />
        </div> 
        <p>{about3}</p>  <br /> <hr />
    </div>
  )
}
