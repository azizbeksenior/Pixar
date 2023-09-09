import'./win-or-lose.css'
import Header from '../../Components/Header/Header'
import Name2 from '../../Components/Name/Name2'
import End from '../../Components/End/End'

export default function Win_or_lose() {
  return (
    <div className="Win_or_lose">
        <Header/>
        <div className="Win_or_lose1"> <br /><br /><br /><br /><br /><br /><br />
            <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/b289be43-8db8-4a70-a580-1a0d95b9cf7a/logo.jpg?format=1500w" alt="" /> <br /> <br />
            <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/424f0a73-624b-45e6-ae64-5ee6bc67f5dc/D23_WoL_PubStill.pub16.jpg?format=1500w" alt="" /> <br /><br /><br />
            <p>“Win or Lose,” Pixar Animation Studios’ first-ever original series, follows the intertwined stories of eight different characters as they each prepare for their big championship softball game. The series reveals what it actually feels like to be in the shoes of each character—the insecure kids, their helicopter parents, even a lovesick umpire—with incredibly funny, very emotional and uniquely animated perspectives. Directed, written and executive produced by Carrie Hobson and Michael Yates, and produced by David Lally.</p> <br /><br />
           <br /><br /><br />
            <b>“Win or Lose” streams on Disney+ in December 2023.</b> <br /><br />
            <Name2
            theme={'Cast'}
            logo={'Will Forte (coach)'}/>
            <Name2
            theme={'Produced by'}
            logo={'David Lally'}/>
            <Name2
            theme={'Directed by'}
            logo={'Carrie Hobson, Michael Yates'}/>
        </div> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <End/>
    </div>
  )
}
