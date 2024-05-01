import React from 'react';

const MovieGenres = () => {
  return (
    <div className='container'>
      <h2 className="mb-4 text-white">Movie Genres</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4 g-4">
        {/* Card 1 */}
        <div className="col">
          <div className="card border-0 bg-transparent" style={{ height: '250px' }}>
            <div className="card-body text-white">
              <img src="https://i.imgur.com/OW4inm4.png" alt="Action" className="mb-2" style={{ width: '50px', height: '50px', filter: 'brightness(0) saturate(100%) invert(89%) sepia(59%) saturate(384%) hue-rotate(330deg) brightness(103%) contrast(101%)' }} />
              <h5 className="card-title">Action</h5>
              <p className="card-text">Thrilling adventures and high-octane entertainment</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col">
          <div className="card border-0 bg-transparent" style={{ height: '250px' }}>
            <div className="card-body text-white">
              <img src="https://i.imgur.com/K8Mvkfj.png" alt="Romance" className="mb-2" style={{ width: '50px', height: '50px', filter: 'brightness(0) saturate(100%) invert(89%) sepia(59%) saturate(384%) hue-rotate(330deg) brightness(103%) contrast(101%)' }} />
              <h5 className="card-title">Romance</h5>
              <p className="card-text">Heartwarming stories of love and relationships</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col">
          <div className="card border-0 bg-transparent" style={{ height: '250px' }}>
            <div className="card-body text-white">
              <img src="https://i.imgur.com/iELDUqY.png" alt="Comedy" className="mb-2" style={{ width: '50px', height: '50px', filter: 'brightness(0) saturate(100%) invert(89%) sepia(59%) saturate(384%) hue-rotate(330deg) brightness(103%) contrast(101%)' }} />
              <h5 className="card-title">Comedy</h5>
              <p className="card-text">Laugh-out-loud humor and light-hearted fun</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col">
          <div className="card border-0 bg-transparent" style={{ height: '250' }}>
            <div className="card-body text-white">
              <img src="https://i.imgur.com/NWIUc4B.png" alt="Thriller" className="mb-2" style={{ width: '50px', height: '50px', filter: 'brightness(0) saturate(100%) invert(89%) sepia(59%) saturate(384%) hue-rotate(330deg) brightness(103%) contrast(101%)' }} />
              <h5 className="card-title">Thriller</h5>
              <p className="card-text">Suspenseful and gripping plots that keep you on the edge of your seat</p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default MovieGenres;
