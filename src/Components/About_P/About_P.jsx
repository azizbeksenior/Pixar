import './About_P.css'
import Name from '../Name/Name'

export default function About_P({about , img , Pname , job}) {
  return (
    <div className="About_P">
        <img src={img} alt="" />
        <div className="About_P1">
            <Name Pname={Pname} job={job}/> <br /> <br />
            <p id='p'>
           {about}
            </p> <br /> <br />
            <div className="button">
                <a href=''><button>BACK TO TOP</button></a> <br /> <br />
                <hr />
            </div>
        </div>
    </div>
)
}
