import React from 'react';

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-auto" style={{textAlign: 'center'}}>
                    <img src="https://admin.elischools.com/eli-media/logos/eli-logo-dark.png" alt="Logo"
                        className="img-fluid" />
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;
