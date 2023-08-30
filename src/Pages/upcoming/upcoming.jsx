import './upcoming.css'
import Header from '../../Components/Header/Header'
import Baner_a2 from '../../Components/Baner/Baner_a2'
import End from '../../Components/End/End'

export default function Upcoming() {
  return (
    <div className="Upcoming">
        <Header/>
        <Baner_a2
        about={'UPCOMING'} /> <br /><br /><br /><br /><br /> <br /><br />
        <div className="Upcoming1">
            <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/10ab84a6-ec7a-4c97-a0f1-31a7430cea05/elio.jpg?format=1500w" alt="" /> <br /><br /><br /><br /><br /><br /><br /><br />
            <h1>Elio</h1> <br />
            <p>U.S. RELEASE DATE: MARCH 1, 2024</p> <br />
            <p>DIRECTOR: ADRIAN MOLINA</p> <br />
            <p>PRODUCER: MARY ALICE DRUMM</p> <br /> <br /> <hr /> <br /><br /><br />
            <p id='p'>For centuries, people have called out to the universe looking for answers—in Disney and Pixar’s all-new movie “Elio,” the universe calls back! The original feature film introduces Elio, an underdog with an active imagination who finds himself inadvertently beamed up to the Communiverse, an interplanetary organization with representatives from galaxies far and wide. Mistakenly identified as Earth’s ambassador to the rest of the universe, and completely unprepared for that kind of pressure, Elio must form new bonds with eccentric alien lifeforms, survive a series of formidable trials and somehow discover who he is truly meant to be. </p> <br /><br /><br /><br /><br /><br />
        </div>
        <End/>
    </div>
  )
}
