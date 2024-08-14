import profilePic from '../assets/Alex.jpg';

const About = () => {
    

    return ( 
        <div className ="section-list">
            <h2>About Alex</h2>
            <img src= {profilePic} style={{width:"300px"}} alt ="Alex"></img>
             
            <div className="section-preview">
                <p> Alex Engelsgjerd, aged 32, resides in Richfield, MN with his lively wife, their playful dog, Remi, and their elderly cat, Porkchop. With a rich history in Customer Service, Alex has recently embarked on a journey into the world of coding and software development, driven by his passion for learning and growth.</p>
                <br></br>
                <p>Outside of his professional pursuits, Alex finds joy in immersing himself in literature (Stephen King, being his favorite author), exploring various forms of media, and discovering new culinary delights at local food spots. He cherishes moments spent with family and friends, valuing connections and experiences they bring to his life.</p>
                <br></br>
                <p>With a fervent enthusiasm for his interests and a commitment to self-improvement, Alex is excited about the adventures that lie ahead and the opportunities to continue expanding his knowledge and skills.</p>
                
            </div>
           
        </div>
     );
}
 
export default About;