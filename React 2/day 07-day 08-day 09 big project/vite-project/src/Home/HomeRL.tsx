import "./HomeI.css";
import { Link } from "react-router-dom";

const HomeRL = () => {
  return (
    <>
      <div className="divpp min-w-[550px]">
        <div className="sectAnim">
          <div className="lodAnim" id='ball0'></div>
          <div className="lodAnim" id='ball1'></div>
          <div className="lodAnim" id='ball2'></div>
          <div className="lodAnim" id='ball3'></div>
          <div className="lodAnim" id='ball4'></div>
          <div className="lodAnim" id='ball5'></div>
          <div className="lodAnim" id='ball6'></div>
          <div className="lodAnim" id='ball7'></div>
          <div className="lodAnim" id='ball8'></div>
          <div className="lodAnim" id='ball9'></div>
        </div>
        <section className='flex flex-wrap flex-col gap-6 psect bg-gray-700'>
          <p className='text-4xl shd'>Welcome to our web</p>
          <div className='flex justify-around'>
              
              <Link to="/register">
                  <button className='shd btn font-bold'>Register</button>
              </Link>

              <Link to="/login">
                <button className='shd btn font-bold'>Log in</button>
              </Link>
          </div>
        </section>
      </div>
    </>
  )
}

export default HomeRL