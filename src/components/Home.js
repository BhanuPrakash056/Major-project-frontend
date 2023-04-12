import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '500px'
  }
  const slideImages = [
    {
      url: 'https://www.greenjournal.co.uk/wp-content/uploads/2020/05/ai-in-agriculture.jpg'
      
    },
    {
      url: 'https://img.freepik.com/premium-vector/farm-shop-local-market-selling-fruit-vegetables_36082-492.jpg?w=1800'
      
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
    },
  ];
  
  const subtitle = {
    fontfamily: 'Helvetica'
  }
const Home = () => {
    return (
        <div>
        <br></br>
        <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
        <br></br>
        <br></br>
      </div >
      <div className='subtitle'>
      The majority of India's population depends on agriculture, but their contribution to the economy is low due to lack of modern technology knowledge. A machine learning-powered fertilizer and crop recommendation app has been developed to improve yield and soil quality. The app includes a marketplace, community support, and e-learning assistance.
      </div>
        
        </div>

       
    )
}

export default Home