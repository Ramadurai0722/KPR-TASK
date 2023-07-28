import React from 'react';

const Slider = () => {
  return (
    <div className="container">
      <div className="carousel slide" id="myCarousel" data-ride="carousel">
       
        

        <div className="carousel-inner">
          

          <div className="item active">
            <img src="https://images.macrumors.com/article-new/2023/02/iPhone-15-Pro-Roundup-Mock-Feature-Perspective.jpg" alt="2nd item" style={{ width: "100%", height: "80vh" }} />
            <div className="carousel-caption">
              <h3>Iphone 15</h3>
              <p><i>NEWLY LUANCHED</i></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
