import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="footer" style={{ padding: '20px', margin: '10px', height: 'auto' }}>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div style={{ width: '80%', margin: '0 auto', fontSize: '20px' }}>
            <h1>Contact</h1>
            <p className="glyphicon glyphicon-home"> : Ramadurai R </p> <br />
            <p className="glyphicon glyphicon-envelope"> : Ramadurai110922@gmail.com</p> <br />
            <p className="glyphicon glyphicon-phone-alt"> : 0000000000</p>

            <div style={{ width: '80%', margin: '10px auto', fontSize: '28px', display: 'inline-block' }}>
              <a href="https://github.com/Ramadurai0722" target="blank"><i className="fa fa-github" style={{ marginLeft: '10px' }}></i></a>
              <a href="https://myaccount.google.com/profile" target="blank"><i className="fa fa-google" style={{ marginLeft: '10px' }}></i></a>
              <a href="https://www.linkedin.com/in/ramadurai-rengasamy-7b5585271/" target="blank"><i className="fa fa-linkedin" style={{ marginLeft: '10px' }}></i></a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Footer;
