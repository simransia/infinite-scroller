import React from 'react';
import Spinner from '../loading.gif'

function Loader() {
  return (
    <div className="text-center">
     <img src={Spinner}/>
    </div>
  )
}

export default Loader;