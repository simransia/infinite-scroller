import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function CardSkeleton() {
    return (
        
        <div className='col-lg-3 col-md-4 my-3'>
        <div className="card" style={{width:"21vw", height:"25vw",border:"none"}}>
        < Skeleton width={"19vw"} height={"23vw"} className="skeleton"/>
        </div>
      </div>

              
         
            )
}

            export default CardSkeleton