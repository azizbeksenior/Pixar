import './home-entertainment.css'
import Header from '../../Components/Header/Header'
import Baner_a2 from '../../Components/Baner/Baner_a2'
import About_a2 from '../../Components/About_a/About_a2'
import Animation from '../../Components/Animation/Animation'
import End from '../../Components/End/End'

export default function Home_entertainment() {
  return (
    <div className="Home_entertainment">
        <Header/>
        <Baner_a2
        about={'HOME ENTERTAINMENT SHORTS'}
        /> <br /><br /><br />
        <div className="Home_entertainment1">
            <div className="Home_entertainment11">
                <Animation
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547160472328-C941GS7ZJSQUP7GW12AI/auntie.jpg?format=300w'}
                about={'Auntie Edna'}
                />
                <Animation
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1509654620529-4WKYMBLWJ5CW7S8Y8TMV/fritter_poster.jpg?format=300w'}
                about={'Ms. Fritters Racing School'}
                />
                <Animation
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1474045575041-451IRVA4AH179DEJQ90J/riley.jpg?format=300w'}
                about={"Riley's First Date"}
                />
                <Animation
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1474045574912-4N6CK6UWESBH1MOZ4SBX/mordu.jpg?format=300w'}
                about={'The Legend of Mor’du'}
                />
                <Animation
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1474045574581-84SP2TIEXTH5Y7ZAP4QA/dug.jpg?format=300w'}
                about={"Dug's Special Mission"}
                />
                <Animation
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1474045574571-YCLK0MVLOQ7DI97ZMQR9/burne.jpg?format=300w'}
                about={'BURN-E'}
                />
                <Animation
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1474045574791-IA8TVXSXBRNMDL6NYF46/friend.jpg?format=300w'}
                about={'Your Friend The Rat'}
                />
                <Animation
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1474045574708-5LIAMBRSAN6BO59WTXOJ/ghostlight.jpg?format=300w'}
                about={'Mater And The Ghost Light'}
                />
                <Animation
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1474045574796-T1SFCJIC2H8W7G99C1DH/jack.jpg?format=300w'}
                about={'Jack-Jack Attack'}
                />
                <Animation
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1474045574908-47220GN5PGO3HD4HPHVG/mikes.jpg?format=300w'}
                about={"Mike's New Car"}
                />
            </div>
            <div className="hr"> <br /> <br /> <hr /> <br /> <br /></div>
            <div className="Home_entertainment12">
                <About_a2
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547585885547-TMPVCD3B9TWD9NQKEQT6/z513_19bcs_42.pub16.jpg?format=1500w'}
                theme={'Auntie Edna'}
                about={'Auntie Edna learns just why Bob is so tired after agreeing to babysit Jack-Jack.     '}
                />
                <About_a2
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547585932028-PQVPJ5LF8XAQPCQBJPAS/f2.jpg?format=1500w'}
                theme={'Ms. Fritter’s Racing School'}
                about={'Enjoy blindsided testimonials from the Crazy 8’s, touting the transformative impact Ms. Fritter’s Racing School has had in reshaping the direction of their lives.'}
                />
                <About_a2
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547585983034-4WAA12YTVLHP3FPY7W73/head.jpg?format=1500w'}
                theme={"Riley's First Date"}
                about={`Riley, now 12, is hanging out with her parents at home when potential trouble comes knocking. Mom's and Dad's Emotions find themselves forced to deal with Riley going on her first date.`}
                />
                <About_a2
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547586044056-T6SZR5214WTH414VY1H8/1.jpg?format=1500w'}
                theme={'The Legend of Mor’du'}
                about={'The backstory of the monstrous bear Mor’du is revealed in striking fashion in this impressionistic look into mythology from the world of Brave.'}
                />
                <About_a2
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547586097051-9D0S7D8RFLGX3RI2KO2F/1.jpg?format=1500w'}
                theme={`Dug's Special Mission`}
                about={`How far would you go to make yourself belong? It's something we all need, but what if no one seems to want you? Dug is sent on foolish missions by Alpha, Beta, and Gamma so they can hunt for the Bird of Paradise Falls by themselves. Dug may find that where he belongs is not where he's been looking.`}
                />
                <About_a2
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547586150459-8AAK4R7YZ41KXRZ8OG3W/head.jpg?format=1500w'}
                theme={'BURN•E'}
                about={'To what lengths will a robot go to do his job? BURN•E is a dedicated, hard-working robot who finds himself locked out of his ship. He quickly learns that completing a simple task can often be a very difficult endeavor.'}
                />
                <About_a2
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547586221655-P3UZNT2WSJJ4PHHL4Q5C/head.jpg?format=1500w'}
                theme={'Your Friend The Rat'}
                about={"Let's face it: rats are not the most beloved creatures on earth. However, maybe this little tale about the history of human and rat interaction will change the world's tune. At least that is the hope of Remy, the star of Ratatouille, and his reluctant brother Emile as they guide us through world history from a rat's perspective. Why can't we all just get along?"}
                />
                <About_a2
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547586284196-WCH3YH7UCV6QZILCXOZ8/head.jpg?format=1500w'}
                theme={'Mater And The Ghostlight'}
                about={'A companion piece to Cars, this short finds Mater haunted by a mysterious blue light that teaches him not to play pranks on the other cars in Radiator Springs.'}
                />
                <About_a2
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547586324427-3BBZUF0BFZWZCJ2GJEIY/1.jpg?format=1500w'}
                theme={'Jack-Jack Attack'}
                about={`Kari the babysitter thinks she's in for a night of routine babysitting. She's prepared to provide neurological stimulation with some soothing musical accompaniment for little Jack-Jack, the smallest member of the incredible Parr family. Little does she know that Jack-Jack will teach her a thing or two about babies with "special needs."`}
                />
                <About_a2
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547586371013-AX5AOENBO0YXMW7XOW0Z/head.jpg?format=1500w'}
                theme={'Mikes New Car'}
                about={`Mike discovers that being the top-ranking laugh collector at Monsters, Inc. has its benefits—like earning enough money to buy a six-wheel-drive car that's loaded with gadgets. That new-car smell doesn't last long enough, however, as Sulley jump-starts an ill-fated road test that teaches Mike the true meaning of buyer's remorse.`}
                />
            </div>
        </div>
        <End/>
    </div>
  )
}
