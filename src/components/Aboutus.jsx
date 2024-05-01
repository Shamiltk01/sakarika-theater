import React from 'react';

const Aboutus = () => {
  return (
    <div>
      <h2 className="text-center text-white mb-4 my-4">Seamless Seat Selection & Booking</h2>
      <div className='container'>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div className="card mb-3 text-center" style={{ border: 'none', position: 'relative', backgroundColor: 'rgba(255, 255, 255, 0)', top: 0 }}>
              <div className="card-body">
                <h5 className="card-title text-white" style={{ fontSize: '24px' }}>Interactive Seat Maps</h5>
                <p className="card-text text-white" style={{ fontSize: '18px' }}>Select seats with ease using interactive seat maps</p>
              </div>
              <div style={{ position: 'absolute', top: '50%', left: '-15px', transform: 'translate(-50%, -50%)' }}>
                <div className="badge" style={{ width: '30px', height: '30px', fontSize: '14px', borderRadius: '5px', position: 'relative' }}>
                  1
                  <div className="line" style={{ position: 'absolute', width: '0', height: '2px', backgroundColor: 'red', top: '50%', left: '100%', animation: 'moveLine 2s infinite alternate' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div className="card mb-3 text-center" style={{ border: 'none', position: 'relative', backgroundColor: 'rgba(255, 255, 255, 0)', top: 0 }}>
              <div className="card-body">
                <h5 className="card-title text-white" style={{ fontSize: '24px' }}>Secure</h5>
                <p className="card-text text-white" style={{ fontSize: '18px' }}>Enjoy a secure and swift booking process </p>
              </div>
              <div style={{ position: 'absolute', top: '50%', left: '-15px', transform: 'translate(-50%, -50%)' }}>
                <div className="badge" style={{ width: '30px', height: '30px', fontSize: '14px', borderRadius: '5px', position: 'relative' }}>
                  2
                  <div className="line" style={{ position: 'absolute', width: '0', height: '2px', backgroundColor: 'red', top: '50%', left: '100%', animation: 'moveLine 2s infinite alternate' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div className="card mb-3 text-center" style={{ border: 'none', position: 'relative', backgroundColor: 'rgba(255, 255, 255, 0)', top: 0 }}>
              <div className="card-body">
                <h5 className="card-title text-white" style={{ fontSize: '24px' }}>Instant Confirmation</h5>
                <p className="card-text text-white" style={{ fontSize: '18px' }}>Receive instant confirmation and e-tickets for your selected seats.</p>
              </div>
              <div style={{ position: 'absolute', top: '50%', left: '-15px', transform: 'translate(-50%, -50%)' }}>
                <div className="badge" style={{ width: '30px', height: '30px', fontSize: '14px', borderRadius: '5px', position: 'relative' }}>
                  3
                  <div className="line" style={{ position: 'absolute', width: '0', height: '2px', backgroundColor: 'red', top: '50%', left: '100%', animation: 'moveLine 2s infinite alternate' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
