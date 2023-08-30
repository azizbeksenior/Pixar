import './story.css'
import Header from '../../Components/Header/Header'
import Baner_a2 from '../../Components/Baner/Baner_a2'
import About_str from '../../Components/About_str/About_str'
import PP from '../../Components/PP/PP'
import End from '../../Components/End/End'
import About_str1 from '../../Components/About_str/About_str1'

export default function Story() {
  return (
    <div className="Story">
        <Header/>
        <Baner_a2
        about={'OUR STORY'}
        /> <br /><br /><br /><br /><br /><br /> <br />
        <div className="Story1">
            <h1 id='h1'>A LAMP NAMED LUXO (1979-1991)</h1>
            <div className="Story1_0">
            <About_str
            img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1489448449672-ED7V0B4ZOYKF82RVHFOI/image-asset.jpeg?format=1500w'}
            theme={'1979'}
            about={'George Lucas recruits Ed Catmull from the New York Institute of Technology to head Lucasfilm’s Computer Division, a group charged with developing state-of-the-art computer technology for the film industry. Lucas’s wish list: a digital (nonlinear) film editing system, a digital (nonlinear) sound editing system, a laser film printer, and further exploration of computer graphics. The following year, he is joined by Alvy Ray Smith, who is hired as Director of Computer Graphics Research.'}
            />
            </div>
            <div className="Story1_1">
                <About_str
                theme={'1982'}
                about={'The Computer Division completes the “Genesis Effect” sequence for Star Trek II: The Wrath of Khan. The scene, which shows an initially lifeless planet being rapidly transformed by lush vegetation, is the first completely computer animated sequence in a feature film.'}
                />
                <About_str
                theme={'1983'}
                about={'The Computer Division’s Graphics Group creates their first film-resolution image, “The Road to Point Reyes.” Near the end of the year, animator John Lasseter is invited to come up to the Bay Area to do some freelance work with the Graphics Group.'}
                />
            </div>
            <div className="Story1_2">
                <About_str
                theme={'1984'}
                about={'Lasseter is hired full-time, joining the Computer Division as an “Interface Designer.”'}
                about1={'A partially completed version of “The Adventures of André & Wally B.” premieres at SIGGRAPH. It is the first short film created by the future animation studio, featuring complex flexible characters, hand-painted textures, and motion blur. It is also the first example of character animation in the young medium of computer animation.'}
                about2={'At SIGGRAPH, the Computer Division also shows off its prototype Pixar Image Computer.'}
                img3_1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1469739758269-PX8OTX1DXFQUJOK1JS7X/bee3.jpg?format=750w'}
                img3_2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1469739757913-I831CC1O0WWLW1HS55IP/bee4.jpg?format=750w'}
                img3_3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1469739807735-34JUHHC8KUT2OOXOFO9E/shorts1.jpg?format=750w'}
                />
            </div>
            <div className="Story1_3">
                <About_str
                theme={'1985'}
                about={'The Computer Division completes the Stained Glass Knight sequence that appears in the film Young Sherlock Holmes.'}
                img2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1489448368573-3VG7LC3INQ86WP4LNQ9X/image-asset.jpeg?format=1500w'}
                />
            </div>
            <div className="Story1_4">
                <About_str
                theme={'1986'}
                about={'Steve Jobs purchases the Computer Division from George Lucas and establishes the group as an independent company, “Pixar.” At this time about 40 people are employed.'}
                about1={'Pixar and Disney begin collaboration on CAPS, the Computer Animation Production System, which would revolutionize the creation of traditional animated films. The first check written to Pixar by a client after its incorporation is from Disney, for work on this project.'}
                img2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1469739861274-TI930IWM8GAFAXORDSAW/image-asset.jpeg?format=1500w'}
                img4_1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575415413633-OCAV56T07VFJC2CY0OH3/lux.jpg?format=500w'}
                img4_2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575415413706-QMUD35MIPGVMTVCSDHAL/lux2.jpg?format=500w'}
                img4_3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575415414052-AW0PS050Y7H1TSGUVO2M/lux3.jpg?format=500w'}
                img4_4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575415414387-SVPMSTY0JD8NK0ANAU57/lux4.jpg?format=500w'}
                about3={'“Luxo Jr.” is completed. The short film, John Lasseter’s official directorial debut, is unveiled in August at SIGGRAPH and then screened for general audiences at Los Angeles-area theaters in November. “Luxo Jr.” will go on to become the first three-dimensional computer animated film to be nominated for an Oscar®, receiving a nomination for Best Short Film (Animated).'}
                />
            </div>
            <div className="Story1_1">
                <About_str
                theme={'1987'}
                about={'“Red’s Dream” is completed and premieres at SIGGRAPH. A portion of the film is rendered entirely on the Pixar Image Computer.  '}
                />
            </div> <br /><br />
            <div className="PP1P">
                <PP
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575488271919-PKR95G3DLJIYFBK61R0Y/tin.jpg?format=1500w'}
                li={'Pixar’s proprietary animation system, identified to the outside world as Marionette but internally known as Menv (“men-vee”), short for “modeling environment,” comes online.'}
                li1={'Pixar’s proprietary renderer, RenderMan®, also makes its internal debut.'}
                li2={'Both pieces of software are used to produce “Tin Toy,” Pixar’s third short film. '}
                li3={'A partially completed version of “Tin Toy” is screened at SIGGRAPH, with the finished film premiering later that year at the Ottawa International Film Fest. “Tin Toy” will go on to become the first computer animated film to receive an Academy Award® when it is named Best Short Film (Animated) the following year.'}
                />
            </div> <br /> <hr />
            <div className="Story1_1">
                <About_str
                theme={'1989'}
                about={'“Knick Knack” is completed. A work-in-progress version is screened at that year’s SIGGRAPH. It is Pixar’s first animation producedin stereoscopic 3D.'}
                about1={'The first commercial version of RenderMan® is released.  '}
                about2={'Pixar begins making commercials.  The first is an ad for Tropicana orange juice, “Wake Up,” directed by John Lasseter.'}
                />
                <About_str
                theme={'1990'}
                about={'Andrew Stanton and Pete Docter join the company. By the end of the year, each animates a commercial – Andrew Stanton completes “Quite A Package” for Trident, and Pete Docter animates “Boxer” for Listerine. Pixar’s commercial work gives the company invaluable experience in pitching, storytelling, and working with clients, and allows it to develop and refine its production pipeline.'}
                />
            </div> <br /> <br />
            <div className="img4">
             <img src='https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575418872927-ZU44GV5QUQ9WC81EIYJA/listerine.jpg?format=500w' alt="" />
             <img src='https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575488793595-C7TWYJII9GS4BBJYMJPZ/com1.jpg?format=750w' alt="" />
             <img src='https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575488794032-ZLDNNHP9F6YQJD54BREE/com2.jpg?format=500w' alt="" />
             <img src='https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575418798898-NTSL0ZXML66LYR94B6KL/group.jpg?format=500w' alt="" /> <br />
            </div> 
            <div className="Story1_1">
                <About_str
                theme={'1991'}
                about={'Disney and Pixar announce an agreement “to make and distribute at least one computer-generated animated movie.”'}
                about1={'Pixar begins work on the project that will become Toy Story, while continuing to produce commercials and other short materials, including spots for public television.'}
                />
            </div>
        </div> <br /><br /><br /><br />
        <div className="Baner_1">
        <Baner_a2
        about={'TO INFINITY AND BEYOND'}
        />
        </div>
        <div className="Story2">
            <div className="Story1_5">
                <About_str
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1469740430668-4PU4SJUVC3WUA8YP82KL/image-asset.jpeg?format=1500w'}
                theme={'1995'}
                about={'Toy Story, the world’s first computer animated feature film, is released in theaters on November 22. It opens at #1 that weekend and will go on to become the highest grossing film of the year, making $192 million domestically and $362 million worldwide.'}
                about1={'Pixar’s initial public offering takes place just days later, on November 28.  It is the largest IPO of the year.'}
                img4_1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575419179871-F6BRR4FTU3BHMMB0C4A6/ts_poster.jpg?format=500w'}
                img4_2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575419243139-MBYYF9MJRL992XZOG6AW/hotdog.jpg?format=500w'}
                img4_3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575419180039-YW8MWJQLSUITKV8BYZDZ/ts.jpg?format=500w'}
                img4_4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575419282403-MQS36PKIMN5GZS4GDOQO/jloscars.jpg?format=500w'}
                />
            </div>
            <div className="Story1_1">
                <About_str
                theme={'1996'}
                about={'Toy Story is recognized with Academy Award® nominations for Best Original Song, Best Original Score, and Best Original Screenplay—the first time an animated film is recognized for screenwriting. John Lasseter receives a Special Achievement Oscar® from the Academy of Motion Picture Arts and Sciences for his “inspired leadership of the Pixar Toy Story Team resulting in the first feature-length computer animated film.”'}
                about1={'Pixar announces that it will stop making commercials in order to concentrate on longer-format and interactive entertainment.'}
                />
                <About_str
                theme={'1997'}
                about={'The Walt Disney Studios and Pixar Animation Studios announce an agreement to jointly produce five movies over 10 years. '}
                />
            </div>
            <div className="Story1_6">
                <About_str
                theme={'1998'}
                about={'Groundbreaking for Pixar’s Emeryville studio begins.'}
                about1={`"A Bug's Life" is released in theaters on November 25, accompanied by the short film “Geri’s Game.”`}
                img4_1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575419423456-G6T3JQL1LSAWS7OEWVSU/abl-poster.jpg?format=500w'}
                img4_2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575419422907-R9CEO1ZYWPLM48U78OXS/abl-group.jpg?format=500w'}
                img4_3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575419458190-U21H70LP96NGKYBKYESF/Geri.convert8.jpg?format=500w'}
                img4_4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575419458191-WUNFUPTRY9FH3QVUZ0EK/gg_wire.jpg?format=500w'}
                />
            </div>
            <div className="Story1_0">
                <About_str
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575492148774-WQYP0MVSLOZ6RR0CDQW0/ts2_group.jpg?format=1500w'}
                theme={'1999'}
                about={'Toy Story 2 is released in theaters on November 24. It is the first film in history to be entirely created, mastered and exhibited digitally.  It is accompanied by a rerelease of “Luxo Jr.”'}
                />
            </div>
            <div className="Story1_3">
                <About_str
                theme={'2000'}
                about={'Pixar moves to its new building in Emeryville, California.'}
                img2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1489526304455-HKH6RR1JZNE7OXSZYGRO/image-asset.jpeg?format=1500w'}
                />
            </div>
            <div className="Story1_6">
                <About_str
                theme={'2001'}
                about={'Monsters, Inc. is released in theaters on November 2, accompanied by the short film “For the Birds.” '}
                img4_1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575419629922-4NBHXBULFIEJ7QY4DKZV/monsters.jpg?format=500w'}
                img4_2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575419628679-D23HNR241G030QNDSQZH/mon-1.jpg?format=500w'}
                img4_3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575419628727-MK1SHC937VGDMWGGK8CK/mon3.jpg?format=750w'}
                img4_4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575419676323-UFJ5ZC3UYNQVPJTGLGMQ/ftb-1.jpg?format=500w'}
                />
            </div>
            <div className="Story1_1">
                <About_str
                theme={'2002'}
                about={`“A Bug's Land”, a themed land based on A Bug’s Life, opens at Disney California Adventure Park.`}
                />
            </div>
            <div className="Story1_6">
                <About_str
                theme={'2003'}
                about={'Finding Nemo is released in theaters on May 30, accompanied by a re-mastered version of “Knick Knack.” '}
                img4_1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575419781931-MM8NM9WXHXOODYV487ZN/FINAL_Nemo_teaser_onesheet.jpg?format=500w'}
                img4_2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575419781931-PSDXGCWFD0WQ9FR0AFU3/nemo3.jpg?format=500w'}
                img4_3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575419782754-IISF64Z5RYHJ0OU4JSVU/nemo5.jpg?format=750w'}
                img4_4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575419782922-AD3WEE7EXL9WN0YYMZJ0/nrmo2.jpg?format=750w'}
                />
                <About_str
                theme={'2004'}
                about={'The Incredibles is released in theaters on November 5, accompanied by the short film “Boundin’.”'}
                about1={'“Turtle Talk with Crush” opens at Epcot in the Walt Disney World Resort.'}
                img4_1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575481347398-A08U8Q2DVCF47NIPVIAK/incred_poster.jpg?format=500w'}
                img4_2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575481345428-Y8W8VQCAQ0XTW6DM7OKR/inc1.jpg?format=500w'}
                img4_3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575481345531-T6KP46VGQV0Q02IMHTKJ/inc2.jpg?format=750w'}
                img4_4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575481408422-GV7K4FN1G035JEKMH1YF/bound2.jpg?format=750w'}
                />
            </div>
            <div className="Story1_1">
                <About_str
                theme={'2005'}
                about={'Pixar’s first external exhibition of original artwork, Pixar: 20 Years of Animation, opens at the Museum of Modern Art in New York.'}
                />
            </div>
            <div className="Story1_6" id='aas'>
                <About_str
                theme={'2006'}
                about={'Cars is released in theaters on June 9, accompanied by the short film “One Man Band.”'}
                about1={'The late story artist Joe Ranft is named a Disney Legend. '}
                about2={`The Walt Disney Company announces that it has agreed to purchase Pixar Animation Studios.  As part of the deal,
                Ed Catmull and John Lasseter also assume leadership of Walt Disney Animation Studios. 
                
                Pixar celebrates its 20th anniversary.`}
                img4_1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575481549270-GZ6I0TAT7R433EVRL0I0/cars1.jpg?format=500w'}
                img4_2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575481549014-SCAXYFY8LCS0Y599FF90/carse.jpg?format=750w'}
                img4_3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575486475545-948YA7J81LFX1MHSB74Q/carsb.jpg?format=500w'}
                img4_4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575481562394-BFPLC6Y7FKS57OM53WMM/omb1.jpg?format=750w'}
                />
                <About_str
                theme={'2007'}
                about={'Ratatouille is released in theaters on June 29, accompanied by the short film “Lifted.”'}
                about1={'"Finding Nemo Submarine Voyage” opens in Tomorrowland at Disneyland Park in California.'}
                img4_1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575481663940-75HJ8S8E6QVJLZ5JRSMU/rat_poster.jpg?format=500w'}
                img4_2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575481663941-TM81EQC49X8OH8IW1HXW/rat_cook.jpg?format=500w'}
                img4_3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575481664405-AIJH7CUMLY7P2TXWJ3PT/rat1.jpg?format=750w'}
                img4_4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575481662320-JRIOOQ6462KUZVKIDPS5/lifted1.jpg?format=750w'}
                />
                <About_str
                theme={'2008'}
                about={'WALL•E  is released in theaters on June 27, accompanied by the short film “Presto.”'}
                about1={'“Toy Story Midway Mania!” opens at Disney parks in California and Florida.'}
                img4_1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575481762166-EIB71TXUPS9T92QTGI5R/walle-poster.jpg?format=500w'}
                img4_2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575481761629-6ITAKTPM2IRVXY27S33Y/walle_andrew.jpg?format=500w'}
                img4_3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575481761945-Y5839RBM3VUH2RNX5AC7/walle_screen.jpg?format=500w'}
                img4_4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575481818866-AKUJVEGVHEW3I7B2XIHV/prsto.jpg?format=500w'}
                />
                </div>
                 <div className="Story1_2">
                <About_str
                theme={'2009'}
                about={'Up becomes the first animated feature film to open the Cannes Film Festival.  It opens in wide release on May 29 with the short film“Partly Cloudy.” '}
                about1={'"Monsters, Inc. Ride & Go Seek" opens at Tokyo Disneyland'}
                img3_1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575481962750-1YZJGB75BZ1ZWNMDOFHS/up_poster.jpg?format=500w'}
                img3_2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575481960277-M24X8BCFBDGLL4PJ3TYS/up_bird.jpg?format=750w'}
                img3_3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575481959595-ESHB6CQ0S1NJYN1D1MUW/partly_cloudy_vertical.jpg?format=500w'}
                />
                 </div>
                 <div className="Story1_6">
                 <About_str
                theme={'2010'}
                about={'Toy Story 3 is released in theaters on June 18, accompanied by the short film “Day and Night.” '}
                about1={`“Toy Story Playland,” a themed land based on the
                Toy Story films, opens at Walt Disney Studios Park at Disneyland Paris.`}
                img4_1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482101766-UA3Q8XD4ZF0B9IVEI75J/ts31.jpg?format=500w'}
                img4_2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482101666-KY4Q4UTE7P4DSLNFMJNW/ts3_toys.jpg?format=500w'}
                img4_3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482097029-4HIB3DBPYA5V4DW6V67R/ts3_lego.jpg?format=500w'}
                img4_4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482142087-ZY7I9CJG1QOZBF6JE564/day.jpg?format=750w'}
                />
                 <About_str
                theme={'2011'}
                about={'Cars 2  is released in theaters on June 24, accompanied by the first Toy Story Toon, “Hawaiian Vacation.”'}
                about1={'Pixar celebrates its 25th anniversary.'}
                about2={'“Toy Story Land” opens at Hong Kong Disneyland.'}
                img4_1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482273299-7SB4S41IVGK7FYEUMO2O/cars2.jpg?format=500w'}
                img4_2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575486424836-49455J6MCCXP33RBDH7V/c2crew.jpg?format=500w'}
                img4_3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482273299-VWCXOSMSPVHR9DQ588NX/cars2_draw.jpg?format=500w'}
                img4_4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482273876-00SPX4WCYQ55VCMHRWLA/ts_vacaton.jpg?format=750w'}
                />
                 <About_str
                theme={'2012'}
                about={'Brave is released in theaters on June 22, accompanied by the short film “La Luna.”'}
                about1={'Menv (“men-vee”), Pixar’s long-lived proprietary animation system, is officially retired in favor of a completely new proprietary system named Presto, after the studio’s 2008 short film.  Brave is the first film animated using this new system—which is still referred to internally as “menv.”'}
                about2={'Pixar, in partnership with the San Francisco Symphony, launches "Pixar in Concert", a symphonic rendition of the scores of Pixar films.'}
                img4_1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482365444-G136GN2KOQHTJ7VK1LWF/brave_poster.jpg?format=500w'}
                img4_2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482365444-GYCWFKM1TCVAWZ2JKGVK/brave_arrows.jpg?format=500w'}
                img4_3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482365774-0PTI3ED0000MLWUBCRJ7/brave_screen.jpg?format=500w'}
                img4_4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482365919-HAOSHI6MXFHWEPUFR71Z/laluna_poster.jpg?format=500w'}
                />
                 <About_str
                theme={'2013'}
                about={'Monsters University is released in theaters on June 21, accompanied by the short film “The Blue Umbrella.”'}
                about1={'The TV special "Toy Story Of TERROR!" airs on ABC.'}
                img4_1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482458304-Q2UTLG4479N1KYRH558Q/mu.jpg?format=500w'}
                img4_2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482457689-G9HMWG1SQPBDY2C5BJGO/mu_meeting.jpg?format=500w'}
                img4_3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482503021-1T409MKLLMQHWFN2E3QN/blue.jpg?format=750w'}
                img4_4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482563022-RCOKE7BU8WOUDGF1SVYP/terror.jpg?format=750w'}
                />
            </div> <br /><br /><br />
            <PP
            img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575489788284-AZUA7DWQD906KICL0PFY/tsttf_kitty.jpg?format=1500w'}
            theme={'2014'}
            li={'The holiday TV special "Toy Story That Time Forgot" airs on ABC.'}
            li1={'"Ratatouille: The Adventure" opens in Walt Disney Studios Park at Disneyland Paris.'}
            /> <br /><br /> <hr />
            <div className="Story1_6">
                <About_str
                theme={'2015'}
                about={'After premiering at the 68th Cannes Film Festival in May, Inside Out is released on June 19, accompanied by the short film “LAVA.”'}
                about1={`The Good Dinosaur, accompanied by the short film “Sanjay's Super Team,” is released in theatres on November 25.`}
                img4_1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482698062-HOOL0SIWO8F6GMAOQ54L/inside.jpg?format=500w'}
                img4_2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482697781-OX7X7KTIHMRD9CCGJY2Y/dino.jpg?format=500w'}
                img4_3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482699428-EK3GSD6TOCM32GHP3PCM/lava.jpg?format=750w'}
                img4_4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482700223-TNTLY2NKTCFJR3XJGJBU/sanjay_1.jpg?format=500w'}
                />
                <About_str
                theme={'2016'}
                about={'Finding Dory, accompanied by the short film “Piper,” is released in theatres on June 17.'}
                about1={'"The Toy Story Hotel" and "Buzz Lightyear Planet Rescue" attraction debut with the opening of Shanghai Disney Resort.'}
                img4_1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482835903-FGDMS474UIPNSR1014MW/dory.jpg?format=500w'}
                img4_2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482834240-WAS29HHKX2U3NVOEXQR7/dory_graphics.jpg?format=500w'}
                img4_3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482834604-NUM93Q8VAI28HVOD9LE8/dory_photo.jpg?format=500w'}
                img4_4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482835810-1XR3CO3YCMPASSXXTD29/piper.jpg?format=750w'}
                />
            </div>
            <About_str1
            theme={'2017'}
            li1={'Cars 3 accompanied by the short film “Lou,” is released in theatres on June 16.'}
            li2={'Pixar releases its Academy Award®-winning RenderMan® software for non-commercial use.'}
            li3={'Online educational program “Pixar in a Box” is released in partnership with Khan Academy.'}
            li4={'The Science Behind Pixar exhibit opens at the Museum of Science, Boston.'}
            li5={'“Piper", written and directed by Alan Barillaro and produced by Marc Sondheimer, won the Academy Award for Animated Short film'}
            li6={`Coco premiered on October 20, 2017 during the Morelia International Film Festival in Morelia, Mexico. It went on to become Mexico's #1 highest grossing film of all time.`}
            li7={'Coco is released in North America on November 22.'}
            img4_1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482978024-XY98N4K35NIIYVFT1XRR/cars3_poster.jpg?format=300w'}
            img4_2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575482978652-OYPU1WJBNABAK3YBSK2I/cars3_life.jpg?format=500w'}
            img4_3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575483041750-Z63BF9CC0VDSWR5LXQJ9/coco_poster.jpg?format=300w'}
            img4_4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575483043970-Y02LORAKHT9BCWCB9Q33/coco_dalies.jpg?format=500w'}
            img4_5={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575487148717-ZR4YLNIWPMVHA1J0JJO3/lou_2.jpg?format=500w'}
            />  <br /> <hr /> <br />
            <div className="Story1_7">
                <About_str
                img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575491325804-HL7VGU6GWYZC661DZ7FP/helen.jpg?format=1500w'}
                theme={'2018'}
                about={'Incredibles 2 is released in the United States on June 15, 2018 and sets the record for best debut for an animated film of all time, eventually grossing over $1.2 Billion dollars worldwide - Pixar’s biggest grossing film yet!'}
                about1={'“Bao”, written and directed by Domee Shi  is released with Incredibles 2 on June 15, 2018. '}
                about2={`June 19 Pete Docter is officially announced as Pixar's Chief Creative Officer.`}
                img4_1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575486144030-Q28V7BJQAMNT9KE7AGW0/i2_poster.jpg?format=750w'}
                img4_2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575486143034-TS7G95RN5W5AEXFDKZS6/i2_crew.jpg?format=500w'}
                img4_3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575486138521-HUD1JX16UQEXXUT8AATA/bao1.jpg?format=750w'}
                img4_4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575486138874-493J3WVF99H2K0O4GA7P/bao_studio.jpg?format=500w'}
                />
            </div>
            <div className="Story2_1">
                <About_str1
                theme={'2019'}
                li1={'Pixar debuted the first three SparkShorts projects, Smash and Grab, Purl and Kitbull in January at the El Capitan Theater in LA.'}
                li2={'“Bao," written and directed by Domee Shi and produced by Becky Neiman-Cobb, won the Academy Award for Animated Short film. '}
                li3={`Lightning McQueen's Racing Academy opened on March 31 at Disney's Hollywood Studios.`}
                li4={'Toy Story 4 is released in the United States on June 21. '}
                li5={'Ed Catmull, original Pixar co-founder, retired from his role as President of Pixar Animation Studios at the end of July.'}
                li6={'Disney+ officially launched November 12, and with it debuted original Forky Asks a Question shorts, written and directed by Bob Peterson, and new SparkShorts projects including Float and Wind. '}
                img1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575928066868-EOGAGTDMEU5ACVJ89BRN/ts41.jpg?format=500w'}
                img2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575928065357-UYUXXF28ALG7S0A4MQCJ/kitbull.jpg?format=750w'}
                img3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575928092575-PB1CAQVUXJ1NUISL25OD/ed.jpg?format=500w'}
                img4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575928116769-EWJ5N6W2MVTU3NNAJTBZ/forky.jpg?format=750w'}
                />
            </div> <br /> <hr /> <br />
            <div className="Story2_2">
                <About_str1
                theme={'2020'}
                li1={'The SparkShort Loop is released on Disney+ on January 10.'}
                li2={'Toy Story 4 wins the Oscar for Best Animated Feature at the 92nd Academy Awards.'}
                li3={'Directed by Dan Scanlon and produced by Kori Rae, Onward is released in theaters on March 6.'}
                li4={'On March 16, with approximately 7 weeks of production remaining on the feature film, Soul, Pixar employees begin working from home due to the Coronavirus pandemic. With everyone’s health and safety foremost in mind, Soul is completed on time the following month.'}
                li5={'The SparkShort OUT is released on Disney+ on May 22.'}
                li6={'The docuseries, Inside Pixar, chronicling the many different types of work done by employees at Pixar, is released on Disney+ on November 13.'}
                li7={'Soul, directed by Pete Docter, produced by Dana Murray, and co-directed by Kemp Powers is released on Disney+ on December 25 along with the SparkShort Burrow.'}
                img6_1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1610128536014-LHX4YG5R6TOUMXPDR68U/onw_character.jpg?format=500w'}
                img6_2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1610128534016-MWK6LAOTIGVURRW4NUNT/loop_pub.jpg?format=500w'}
                img6_3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1610128534293-GAUX95H4SK49EFMZUO32/kemp.jpg?format=500w'}
                img6_4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1610128536193-KE9I7VCAHBOPQ0W78W5T/out.jpg?format=500w'}
                img6_5={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1610128537276-LPF7QIC3QEABK2M674EW/soul_poster.jpg?format=300w'}
                img6_6={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1610128702346-U0TMFYSGPGRRBNC264QC/d100_7.pub16.102.jpg?format=500w'}
                /> <br /><br /> <hr /> <br /><br />
                <About_str1
                theme={'2021'}
                li1={'Soul wins the Oscar for Best Animated Feature at the 93rd Academy Awards.'}
                li2={'Featuring characters from Soul, the short 22 vs. Earth is released on Disney+ on April 30th.'}
                li3={'Directed by Enrico Casarosa and produced by Andrea Warren, Luca is released on Disney+ on June 18.'}
                li4={'Featuring Dug, the beloved dog and his master, Carl, from Up, the series of shorts Dug Days is released on Disney+ on September 1, kicking off the annual September celebration Pixar Fest.'}
                li5={'Two new SparkShorts, Twenty Something and Nona release on Disney+ on September 10th and 17th, respectively. The following week, a feature-length documentary about the making of those shorts, A Spark Story, drops on the streaming service.'}
                li6={'Set in the world of Luca, Ciao Alberto premieres on Disney+ on November 12.'}
                img6_1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1641917943197-QBIE92DR3WVGGLZD52HC/22.jpg?format=500w'}
                img6_2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1641918015564-S8Q7YE4MA6O5057DGN6J/v012_229fD_cs.sel16.4404.jpg?format=500w'}
                img6_3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1641918037493-H6PJ52DN8BWCOYMLWI4E/dd.jpg?format=500w'}
                img6_4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1641918062517-N634IZW2C0Z2GGAZBG9F/twenty_something.jpg?format=500w'}
                img6_5={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1641918075987-SAY64UJRE1S4SGPG7WOL/nona.jpg?format=500w'}
                img6_6={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1641918097252-NBSJ6TEFW51V3JJTJOE8/alberto.jpg?format=500w'}
                />
            </div> <br /> <br /> <hr /> <br /> <br />
            <div className="Story22">
                <h1>2022</h1> <br /><br />
                <div className="img">
                    <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1686849094424-XD9Z6ASCRUZYCRCCU2Y3/r499_213a_cs.sel16.235.jpg?format=750w" alt="" />
                    <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1686849144591-7M0Q7OXG4G2Q2OD7NOUB/b020_114a_pub.pub16.807.jpg?format=750w" alt="" />
                    <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1686849163148-33AVZPFU7HOXPR949JT1/cotr_home.jpg?format=500w" alt="" />
                    <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1686849177605-NUK5TY3QLV0GO0P04ROD/alberto.jpg?format=750w" alt="" />
                </div> <br />
                <ul>
                    <li>Directed by Domee Shi and produced by Lindsey Collins, Turning Red premieres on Disney+ on March 11 and is accompanied by a making-of doc about the film, Embrace the Panda.</li> <br />
                    <li>A documentary about the making of Pixar's upcoming film, Lightyear, Beyond Infinity: Buzz and the Journey to Lightyear, is released on Disney+ June 10.</li> <br />
                    <li>Director Angus MacLane and producer Galyn Susman's feature film, Lightyear - about the hero who inspired the toy - launches into theaters on June 18. </li> <br />
                    <li>The all new series, Cars on the Road, premieres on Disney+ on September 8.</li> <br />
                    <li>Ciao Alberto wins for Outstanding Editing in an Animated Program at the inaugural Children and Family Emmys ceremony.</li>
                </ul>
            </div>
        </div> <br /><br /><br /><br /><br />
        <End/>
    </div>
  )
}
