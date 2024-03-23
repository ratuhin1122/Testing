import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { useRef } from 'react'



const Testimonials = () => {
    const slider = useRef();
    let tx=0;

    const Forward = () => {
        if(tx > -50){
            tx -= 25
            slider.current.style.transform=`translateX(${tx}%)`
        }

    }; 

    const Back = () => {
        if(tx < 0){
            tx += 25
            slider.current.style.transform=`translateX(${tx}%)`
        }

     };

    return (
        <div className='testimonials'>
            <img src={next_icon} alt=""  className='next-icon'  onClick={Forward}/>
            <img src={back_icon} alt=""  className='back-icon' onClick={Back}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                           <div className="user-info">
                           <img src={user_1} alt="" />
                            <div>
                                <h3> William Jackson</h3>
                                <span> Educity, USA</span>
                            </div>
                        </div>
                           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, dolorem repellendus. Consectetur nisi eaque sapiente ipsam voluptatum. Accusantium labore repellat voluptate? Obcaecati esse cupiditate quidem voluptate vero officia nisi quo qui, doloribus ipsum similique dignissimos delectus repellat earum velit dolor.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                           <div className="user-info">
                           <img src={user_2} alt="" />
                            <div>
                                <h3> Professor Snap</h3>
                                <span> Educity, USA</span>
                            </div>
                        </div>
                           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, dolorem repellendus. Consectetur nisi eaque sapiente ipsam voluptatum. Accusantium labore repellat voluptate? Obcaecati esse cupiditate quidem voluptate vero officia nisi quo qui, doloribus ipsum similique dignissimos delectus repellat earum velit dolor.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                           <div className="user-info">
                           <img src={user_3} alt="" />
                            <div>
                                <h3> Tom Crusie</h3>
                                <span> Educity, USA</span>
                            </div>
                        </div>
                           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, dolorem repellendus. Consectetur nisi eaque sapiente ipsam voluptatum. Accusantium labore repellat voluptate? Obcaecati esse cupiditate quidem voluptate vero officia nisi quo qui, doloribus ipsum similique dignissimos delectus repellat earum velit dolor.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                           <div className="user-info">
                           <img src={user_4} alt="" />
                            <div>
                                <h3> Jonson Rock</h3>
                                <span> Educity, USA</span>
                            </div>
                        </div>
                           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, dolorem repellendus. Consectetur nisi eaque sapiente ipsam voluptatum. Accusantium labore repellat voluptate? Obcaecati esse cupiditate quidem voluptate vero officia nisi quo qui, doloribus ipsum similique dignissimos delectus repellat earum velit dolor.</p>
                        </div>
                    </li>
                </ul>

            </div>
            
        </div>
    );
};

export default Testimonials;