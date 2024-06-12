import React from 'react'
import './portfolio.css'
import portfolio1 from '../../assets/portfolio1.jpg'
// import travel from '../../assets/travel.png'
import quiz from '../../assets/quiz.png'
import travel2 from '../../assets/travel2.png'

const data=[
{
  id:1,
  image:portfolio1,
  title:'Ecommerce website',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/14671201-World-map-visualization-ui-kit',

},
{
  id:1,
  image:quiz,
  title:'Quiz maker',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/14671201-World-map-visualization-ui-kit',

},
{
  id:3,
  image:travel2,
  title:'Travelling Website',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/14671201-World-map-visualization-ui-kit',

}

]

const Portfolio = () => {
  return (
   <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio_container">
      {
        data.map(({id, image, title, github, demo})=>{
          return(
            <article key={id} className='portfolio_item'>
        <div className="portfolio_item-image"> 
        <img src={image} alt={title} /></div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'> Live Demo</a> 
          </div>
         
       
      </article>
          )
        })
      }

    

     

     
    </div>
   </section>
  )
}

export default Portfolio