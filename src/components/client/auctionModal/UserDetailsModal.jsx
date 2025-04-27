import { Button } from 'antd'
import React from 'react'

const UserDetailsModal = () => {
  return (
    <div>
        <div className=" flex flex-col md:flex-row md:justify-end justify-start  lg:flex-row  lg:justify-end mt-5 mb-2">
            <Button onClick={"cancelAuctionDetailsModal"} className="  navBtn1  ">
              Back
            </Button>
            <Button  className="navBtn2" htmlType="submit">
              Proceed next step
            </Button>
          </div>
    </div>
  )
}

export default UserDetailsModal