import './sparkshorts.css'
import Header from '../../Components/Header/Header'
import Baner from '../../Components/Baner/Baner'
import About_a2 from '../../Components/About_a/About_a2'
import Animation from '../../Components/Animation/Animation'
import End from '../../Components/End/End'

export default function Sparkshorts() {
  return (
    <div className="Sparkshorts">
        <Header/>
        <Baner
        img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547225296919-6ML1B2IT78B8E8KBS11I/head_logo.jpg?format=1500w'} />
        <div className="Sparkshorts1">
            <div className="Sparkshorts11"> <br /><br /><br />
                <a href="https://www.youtube.com/watch?v=J20kmqY28KI" target='_blank'><img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1618935692852-ZN8LT319EHPNGGRXPE5D/spark.jpg?format=1500w" alt="" /></a> <br /><br /><br />
                <p>“The SparkShorts program is designed to discover new storytellers, explore new storytelling techniques, and experiment with new production workflows. These films are unlike anything we’ve ever done at Pixar, providing an opportunity to unlock the potential of individual artists and their inventive filmmaking approaches on a smaller scale than our normal fare.” 
                    <br /><br />
                    Jim Morris - President, Pixar Animation Studios
                </p> <br />
                <div className="hr"> <br /> <hr /> <br /> <br /></div>
            </div>
            <div className="Sparkshorts12">
              <Animation
              about={'Nona'}
              img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1631906228162-OW5IMN2DW0W62ITMK8ON/nona.jpg?format=500w'}
              />
              <Animation
              img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1631294973091-WFOQJVLKW8RCZK1O2DRS/twenty_something.jpg?format=500w'}
              about={'Twenty Something'}
              />
              <Animation
              img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1610471696836-NTU1OORTGB7Y1Q4XMJT2/burrow_poster_2020.jpg?format=500w'}
              about={'Burrow'}
              />
              <Animation
              img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1590166801998-JHUX82DMM8DHHMZ6CG6W/out_poster.jpg?format=500w'}
              about={'Out'}
              />
               <Animation
              img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1551735538109-ZQYC3S97WHUNKHVFSGLJ/purl_v3.jpg?format=500w'}
              about={'Purl'}
              />
              <Animation
              img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1551735634797-TN78R2R9DY74NAV1FX5O/smash_v3.jpg?format=500w'}
              about={'Smash and Grab'}
              />
              <Animation
              img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1551735665992-UML25A5PBN2ZQKV5ZV0O/kitbull_v3.jpg?format=500w'}
              about={'Kitbull'}
              />
               <Animation
              img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1557941400540-84QXA9JO8H8H6WFM9QZL/float_final.jpg?format=500w'}
              about={'Float'}
              />
              <Animation
              img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1556737072324-PCMKSBDBAGQFCP3O1SJF/loop3.jpg?format=500w'}
              about={'Loop'}
              />
              <Animation
              img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1552520449270-5WS6KQ18PK17AQH06QOJ/wind_a.jpg?format=500w'}
              about={'Wind'}
              />
            </div>
            <div className="hr"> <br /> <br /> <hr /> <br /> <br /></div>
            <div className="Sparkshorts13">
              <About_a2
              img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1631909730299-X14TF9BJN8RKPAGKNMNC/nona.jpg?format=1500w'}
              theme={'Nona'}
              about={'A Grandmother, Nona, plans to spend her day off by shutting out the world to watch her favorite TV show, E.E.W. Smashdown Wrestling. However, when her 5-year-old granddaughter Renee is unexpectedly dropped off, Nona is caught between her two favorite things.'}
              />
              <About_a2
              img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1631909490371-5AWNPK7A4EEPMK2L8PXP/twenty.jpg?format=1500w'}
              theme={'Twenty Something'}
              about={'Adulting can be hard. Some days you’re nailing it, while other days, you’re just a stack of kids hiding in a trench coat hoping no one notices. Gia finds herself in this exact scenario the night of her 21st birthday. This is a story about the insecurities of adulting and how we’re all just faking it ’till we make it.'}
              />
              <About_a2
              img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1610471822584-LBZP1PXLC7YJA1RPQ7H8/d100_7.pub16.102.jpg?format=1500w'}
              theme={'Burrow'}
              about={'In Disney and Pixar’s new short film “Burrow,” a young rabbit embarks on a journey to dig the burrow of her dreams, despite not having a clue what she’s doing. Rather than reveal to her neighbors her imperfections, she digs herself deeper and deeper into trouble. After hitting (bed)rock bottom, she learns there is no shame in asking for help.'}
              />
              <About_a2
              img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1590167446932-GSEOQ3RY3OIXJTUMKERX/out.jpg?format=1500w'}
              theme={'Out'}
              about={`On an average day, Greg's life is filled with family, love and a rambunctious little dog - but despite all of this, Greg has a secret. Today is different, though. With some help from his precocious pup, and a little bit of magic, Greg might learn that he has nothing to hide.`}
              />
              <About_a2
              img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547575936096-MOBB144IZTQ8HBL9MLZZ/purl_pub.jpg?format=1500w'}
              theme={'Purl'}
              about={'An earnest ball of yarn named Purl gets a job at a fast-paced, high energy, male centric start-up. Things start to unravel as she tries to fit in with this close knit group. Purl must ask herself how far is she willing to go to get the acceptance she yearns for and in the end is it worth it?'}
              />
              <About_a2
              img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547576205578-YITTET95HLUYNXRWH2L8/smash_pub.jpg?format=1500w'}
              theme={'Smash and Grab'}
              about={'After years of toiling away inside the engine room of a towering locomotive, two antiquated robots will risk everything for freedom and for each other.'}
              />
              <About_a2
              img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547576393997-24DPT7D5O2N45JSB2OJE/kitbull_pub.jpg?format=1500w'}
              theme={'Kitbull'}
              about={'An unlikely connection sparks between two creatures: a fiercely independent stray kitten and a pit bull. Together, they experience friendship for the first time.'}
              />
              <About_a2
              img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547576551905-HFK4OU2BX4FLK6ERZTF4/float_pub.jpg?format=1500w'}
              theme={'Float'}
              about={'In FLOAT, a father discovers that his son is different from other kids in the most unusual way. To keep them both safe from judgement, Dad covers him and keeps him out of sight—but when his son’s ability becomes public, Dad must decide whether to run and hide or to accept his son as he is.'}
              />
              <About_a2
              img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547576702522-125QNKFQ6W7JUFQRC7K0/loop_pub.jpg?format=1500w'}
              theme={'Loop'}
              about={'A non-verbal, autistic girl and a chatty boy are partnered on a canoeing trip. To complete their journey across an urban lake, they must both learn how the other experiences the world.'}
              />
              <About_a2
              img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1547577824489-MLWSVODCXJWQO4LHXZRF/wind-pib.jpg?format=1500w'}
              theme={'Wind'}
              about={'Set in a world of magical realism, WIND sees a grandmother and her grandson trapped deep down an endless chasm, scavenging debris that surrounds them to realize their dream of escaping to a better life.'}
              />
            </div>
        </div>
        <End/>
    </div>
  )
}
