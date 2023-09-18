import React from 'react'
import { Hourglass } from  'react-loader-spinner'

function Loading() {
  return (
    <div>
        <center>
        <Hourglass
            visible={true}
            height="50"
            width="50"
            ariaLabel="hourglass-loading"
            wrapperStyle={{dispaly:"auto"}}
            wrapperClass=""
            colors={['#306cce', '#72a1ed']}
        />
        </center>
    </div>
  )
}

export default Loading
