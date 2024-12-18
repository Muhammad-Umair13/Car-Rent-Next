import React from 'react'

const Payment = () => {
  return (
    <div className="w-full h-[2240px] bg-[#F6F7F9] flex">
        <div className="w-[852px] h-[2176] mt-8 ml-8 gap-8">
            <div className="h-[226px] bg-white">
                <div>
                <p className="font-bold text-xl">Billing Info</p>
                <p className="font-medium text-sm">Please enter your billing info</p>
                </div>

                <div>
                    <form>

                        <div className="mt-[104px] ml-6 ">
                        <label for="name">Name</label><br/>
                        <input type="text" id="name" required className="w-[356px] h-14 rounded-xl bg-[#F6F7F9]" placeholder='Enter Your Name'></input>
                        </div>

                        <label></label>
                        <input></input>

                        <label></label>
                        <input></input>

                        <label></label>
                        <input></input>
                    </form>
                </div>
            </div>
            <div>payment2</div>
            <div>payment3</div>
            <div>payment4</div>
        </div>
        <div>rental summary</div>
    </div>
  )
}

export default Payment