import React from 'react';
import { Outlet,Link } from 'react-router-dom';


export const Products= () => {
    
    return (
        <div>
           <h3>  Products  </h3>
            <Outlet />
             
        </div>
    )
}

