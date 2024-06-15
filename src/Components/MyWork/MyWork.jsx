import React from 'react'
import './MyWork.css'
import mywork_data from '../../utils/mywork_data'

const MyWork = () => {
  return (
    <div className="container-mywork">
    <div className='mywork'>
        <div className="mywork-title">
            <a className='menu-itemmm'>Project</a>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
    </div>
    </div>
  )
}

export default MyWork