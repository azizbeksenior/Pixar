import './toy-story-toons.css'
import Header from '../../Components/Header/Header'
import Baner_a2 from '../../Components/Baner/Baner_a2'
import About_a2 from '../../Components/About_a/About_a2'
import Animation from '../../Components/Animation/Animation'
import End from '../../Components/End/End'

export default function Toy_story_toons() {
  return (
    <div className="Toy_story_toons">
        <Header/>
        <Baner_a2
        about={'TOY STORY TOONS'}/> <br /><br /><br />
        <div className="Toy_story_toons1">
            <div className="Toy_story_toons11">
                <Animation
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1474045403825-O3IPUB5U2JO83DCSNDPC/tst5.jpg?format=300w'}
                about={'Toy Story That Time Forgot'}
                />
                <Animation
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1474045403788-SR2DDY58Q23LBY7IXY74/terror.jpg?format=300w'}
                about={'Toy Story OF TERROR!'}
                />
                <Animation
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1474045403633-IVVX698TRFI38AH6L9TL/rex.jpg?format=300w'}
                about={'Partysaurus Rex'}
                />
                <Animation
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1474045403612-PU79SXRKS2SAFWY4DXAT/small.jpg?format=300w'}
                about={'Small Fry'}
                />
                <Animation
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1474045403927-JRW871R32OGALTMAEO7K/vacation.jpg?format=300w'}
                about={'Hawaiian Vacation'}
                />
            </div>
            <div className="hr"> <br /> <br /> <hr /> <br /> <br /></div>
            <div className="Toy_story_toons12">
                <About_a2
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547585097107-TKZ8KF3UXN7Q1RW3D3ZP/head.jpg?format=1500w'}
                theme={'Toy Story That Time Forgot'}
                about={'During a post-Christmas play date, the Toy Story gang find themselves in uncharted territory when the coolest set of action figures ever turn out to be dangerously delusional. It’s all up to Trixie, the triceratops, if the gang hopes to return to Bonnie’s room in this "Toy Story That Time Forgot."'}
                />
                <About_a2
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547585265291-1F95K6W51JZ5G76TSF58/head.jpg?format=1500w'}
                theme={'Toy Story OF TERROR!'}
                about={'What starts out as a fun road trip for the Toy Story gang takes an unexpected turn for the worse when the trip detours to a roadside motel. After one of the toys goes missing, the others find themselves caught up in a mysterious sequence of events that must be solved before they all suffer the same fate in this "Toy Story OF TERROR!"'}
                />
                <About_a2
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547585363234-93ASH7JLJQPGTPCCCQ39/head.jpg?format=1500w'}
                theme={'Partysaurus Rex'}
                about={'Poor Rex. Buzz, Woody and the rest of the Toy Story gang think he is a just a wet blanket. But when Bonnie takes him to bath time, he goes from a party pooper to king of the hot tub! Creating a bubble bash like no other, everyone’s raving about the Partysaurus Rex!'}
                />
                <About_a2
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547585556895-JKTWJY2TQ6OJNQJT6VO2/tsthead.jpg?format=1500w'}
                theme={'Small Fry'}
                about={"Buzz Lightyear is left behind at a fast food restaurant when a kids' meal toy version of Buzz takes his place. While Bonnie's toys are stuck with the annoying three-inch-tall Buzz impersonator, the real Buzz is trapped in the restaurant at a support group for discarded toys. As Woody and the gang devise a way to rescue their friend, Buzz tries to escape the toy psychotherapy meeting."}
                />
                <About_a2
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547585713865-3PPBSZZ2E4V7US6MJ2RG/head.jpg?format=1500w'}
                theme={'Hawaiian Vacation'}
                about={`Woody and Buzz lead a group of toys in giving Ken and Barbie the Hawaiian vacation of their dreams—but it has to be in a girl's bedroom in the Midwest in the middle of winter, because Ken badly miscalculated the travel arrangements.`}
                />
            </div>
        </div>
        <End/>
    </div>
  )
}
