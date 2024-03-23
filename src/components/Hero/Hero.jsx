import './Hero.css';
import dark from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className="hero container">
            <div className="hero-text">
                <h1> We Ensure Better Education for better World</h1>
                <p>Our Cutting-edge Curriculum is desingedto empower students with the knowledege,skills,and experience neededto excel the dynamic field odf education</p>
            <button className='btn'> Explore More <img src={dark} alt="" /></button>
            </div>
            
        </div>
    );
};

export default Hero;