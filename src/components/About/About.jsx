import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="about-img" className='about-img' />
                <img src={play_icon} alt="play-icon" className='play-icon'/>

            </div>
            <div className="about-right">
                <h3> ABOUT UNIVERSITY</h3>
                <h2>Nurtering  Tomorrow Leader Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repudiandae ab unde suscipit qui, natus consectetur fugiat, labore voluptates beatae fugit! Nemo repellendus vel molestias aperiam! Quaerat quas dignissimos consequatur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laboriosam nobis adipisci quam sint voluptate dolore nam. Et, dolor. Odit ducimus autem dolores? Animi eum eveniet eius itaque ipsam temporibus atque odio debitis expedita hic ad perferendis odit pariatur laboriosam, reprehenderit laborum eligendi voluptas exercitationem voluptatem deserunt quis modi! Iusto!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi provident laudantium non, dignissimos earum accusantium nisi est reiciendis qui voluptatem, pariatur dolores corporis atque, vel blanditiis amet ab reprehenderit iste perferendis quas culpa. Quidem neque, architecto earum ab laborum expedita?</p>

            </div>
            
        </div>
    );
};

export default About;