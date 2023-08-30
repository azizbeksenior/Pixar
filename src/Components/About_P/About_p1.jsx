import './About_p1.css'
import Name1 from '../Name/Name1'

export default function About_p1({img , theme , about , Pname , job}) {
  return (
    <div className="About_p1">
        <img src={img} alt="" />
        <div className="About_p1_1">
            <h1>{theme}</h1> <br /> <br />
            <p className='p'>{about}</p> <br /> <br />
            <Name1 Pname={Pname} job={job}/>
        </div>
    </div>
    )
}
