import axios from 'axios';
import React from 'react'

function Demo() {
    const data =  axios.get(`http://localhost:3030/api/v1/auth/googlecurrentuser`);
    console.log(data);
  return (
    <div>Demo</div>
  )
}

export default Demo