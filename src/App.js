import './App.css';
import { useState } from 'react';
import { carseller } from './data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import small from './images/chevron-circled.svg';
import mySvg from './images/chevron-small.svg';

function App() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: 'true',
    infinite: 'false',
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="App">
      <Slider {...settings}>
        {carseller.map(item=> (
          <div className='card'>
            <div className='card-top'>
              <h3>{item.bodyType}</h3>
              <h4><strong >{item.modelName}</strong></h4> &nbsp;
              {item.modelType}
              <img src={require(`./images/${item.imageUrl}`)} height="300px" width="500px" />
              
              <div className='card-fotor'>
              <div className='option'>
                LEARN 
              <img src={mySvg}/>
              </div> &nbsp;&nbsp;&nbsp;&nbsp;
              <div className='option'>
                SHOP 
              <img src={mySvg}/>
              </div>
              </div>
            </div>
            <div className='card-bottom'>
            </div>
          </div>
        ))}
        
      </Slider>

      <div className='side-silder'>
        <img src={small} />
      </div>

    </div>
  );
}
export default App;
