import './pixar-in-a-box.css'
import Header from '../../Components/Header/Header'
import Baner_a2 from '../../Components/Baner/Baner_a2'
import Name2 from '../../Components/Name/Name2'
import End from '../../Components/End/End'

export default function Pixar_in_a_box() {
  return (
    <div className="Pixar_in_a_box">
        <Header/>
        <Baner_a2
        about={'PIXAR IN A BOX'}
        />
        <div className="Pixar_in_a_box1">
            <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1469726383569-3GABDNW9RCKY3FPK2VV3/image-asset.jpeg?format=1500w" alt="" />
            <p id='p'>Pixar and Khan Academy have collaborated to create, develop, and promote a series of learning tutorials <br />
            that demonstrate how traditional school subjects such as math, science, and the arts are a <br />
            vital part of the everyday work put into Pixar's filmmaking process.</p> <br /> <br /> <br />
            <a href='#' id='a'>VISIT PIXAR IN A BOX</a> <br /><br /><br /><br /><br />
            <div className="Name2"><p>"PIXAR IN A BOX IS A FANTASTIC COURSE FROM KHAN ACADEMY THAT TEACHES <br />
            KIDS OF ALL AGES THE BASICS OF ANIMATION" </p></div> <br />
            <div className="Name2"><p><b>LIFEHACKER</b></p></div> <br />
            <div className="Name2"><p>"THE PIXAR IN A BOX VIDEOS ALSO DO A GOOD JOB OF TAKING VIEWERS INSIDE <br />
            THE WORLD OF PIXAR, INTO THE OFFICES AND STUDIOS OF REAL EMPLOYEES. AND KIDS <br />
            LIKE FEELING ON THE INSIDE.”  </p></div> <br />
            <div className="Name2"><p><b>KQED MIND/SHIFT</b></p></div>
            <div className="hr"><br /><br /><hr /><br /><br /></div>
            <a href="https://www.youtube.com/watch?v=3Iu1Z0h1i1Y" target='_blank'><img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1618936513459-TKNIWZX79A36Q380WKWL/box.jpg?format=1500w" alt="" /></a> <br /><br />
            <div className="img">
                <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1490118613707-RD1SI2OAJWSFXFERDTYL/image-asset.jpeg?format=1500w" alt="" />
                <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1490118690186-LVVGK07KOO3O9Z43UMR9/image-asset.jpeg?format=1500w" alt="" />
                <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1490118558002-2XPL50N0EJB9LSSX5Y7D/image-asset.jpeg?format=1500w" alt="" />
            </div>
        </div> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <End/>
    </div>
  )
}
