import React from 'react';
import "./Keys.scss";

function Keys({bg, value}) {
  return (
    <div className='Keys d-flex align-items-center justify-content-center  rounded-3' style={{backgroundColor: bg}}>
        <span className="key">{value}</span>
    </div>
  )
}

export default Keys