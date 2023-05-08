import React from 'react';
import {Outlet, Link} from 'react-router-dom'

const Main = () => {
    return (
        <div>
      {/*   <nav>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </nav> */}

        <h1>My Email Password Authentication..</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;