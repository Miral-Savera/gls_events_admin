import React from 'react'
import { Dna } from  'react-loader-spinner'

function Loading() {
  return (
    <div>
        <center>
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{dispaly:"auto"}}
          wrapperClass="dna-wrapper"
        />
        </center>
    </div>
  )
}

export default Loading
