import React from 'react'
import './services.css'
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='services'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li><BiCheck className='service_list-icons'/>
            <p>Lorem ipsum dolor sit, xsaffdh</p>
            </li>
            <li><BiCheck className='service_list-icons'/>
            <p>Lorem ipsum dolor sit, xsaffdh</p>
            </li>
            <li><BiCheck className='service_list-icons'/>
            <p>Lorem ipsum dolor sit, xsaffdh</p>
            </li>
            <li><BiCheck className='service_list-icons'/>
            <p>Lorem ipsum dolor sit, xsaffdh</p>
            </li>
            <li><BiCheck className='service_list-icons'/>
            <p>Lorem ipsum dolor sit, xsaffdh</p>
            </li>
          </ul>
        </article>
        {/* end od ul/ux */}

        <article className='services'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li><BiCheck className='service_list-icons'/>
            <p>Lorem ipsum dolor sit, xsaffdh</p>
            </li>
            <li><BiCheck className='service_list-icons'/>
            <p>Lorem ipsum dolor sit, xsaffdh</p>
            </li>
            <li><BiCheck className='service_list-icons'/>
            <p>Lorem ipsum dolor sit, xsaffdh</p>
            </li>
            <li><BiCheck className='service_list-icons'/>
            <p>Lorem ipsum dolor sit, xsaffdh</p>
            </li>
            <li><BiCheck className='service_list-icons'/>
            <p>Lorem ipsum dolor sit, xsaffdh</p>
            </li>
          </ul>
        </article>
        {/* end od webD */}

        <article className='services'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li><BiCheck className='service_list-icons'/>
            <p>Lorem ipsum dolor sit, xsaffdh</p>
            </li>
            <li><BiCheck className='service_list-icons'/>
            <p>Lorem ipsum dolor sit, xsaffdh</p>
            </li>
            <li><BiCheck className='service_list-icons'/>
            <p>Lorem ipsum dolor sit, xsaffdh</p>
            </li>
            <li><BiCheck className='service_list-icons'/>
            <p>Lorem ipsum dolor sit, xsaffdh</p>
            </li>
            <li><BiCheck className='service_list-icons'/>
            <p>Lorem ipsum dolor sit, xsaffdh</p>
            </li>
          </ul>
        </article>
        {/* end od content creation */}


      </div>
    </section>
  )
}

export default Services