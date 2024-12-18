import React from 'react'

const Payment = () => {
    return (
        <div className="w-full h-[2240px] bg-[#F6F7F9] flex">
            <div className="w-[852px] mt-8 ml-8 gap-8">
                <div className="bg-white h-[336px]">
                    <div>
                        <p className="font-bold text-xl">Billing Info</p>
                        <p className="font-medium text-sm">Please enter your billing info</p>
                    </div>

                    <div>
                        <form>
                            <div className="flex">
                                <div className="mt-12 ml-6 ">
                                    <label for="name" className="font-semibold text-base">Name</label><br />
                                    <input type="text" id="name" required className="w-[356px] h-14 rounded-xl bg-[#F6F7F9] p-5" placeholder='Enter Your Name'></input>
                                </div>

                                <div className="mt-12 ml-6 ">
                                    <label for="name" className="font-semibold text-base">Phone Number</label><br />
                                    <input type="text" id="name" required className="w-[356px] h-14 rounded-xl bg-[#F6F7F9] p-5" placeholder='Phone Number'></input>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mt-12 ml-6 ">
                                    <label for="name" className="font-semibold text-base">Address</label><br />
                                    <input type="text" id="name" required className="w-[356px] h-14 rounded-xl bg-[#F6F7F9] p-5" placeholder='Address'></input>
                                </div>

                                <div className="mt-12 ml-6 ">
                                    <label for="name" className="font-semibold text-base">Town/City</label><br />
                                    <input type="text" id="name" required className="w-[356px] h-14 rounded-xl bg-[#F6F7F9] p-5" placeholder='Town or City'></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-[852px] h-[664px] rounded-xl mt-8 bg-white">
                    <div>
                        <p className="font-bold text-xl">Rental Info</p>
                        <p className="font-medium text-sm">Please select your rental date</p>
                    </div>

                    <div>
                        <input type="radio" className="mt-8 ml-6" /> Pick-Up
                    </div>
                    <div>
                        <form>
                            <div className="flex">
                                <div className="mt-6 ml-6 ">
                                    <label for="name" className="font-semibold text-base">Locations</label><br />
                                    <select className="w-[356px] h-14 rounded-xl bg-[#F6F7F9] p-5">
                                        <option>Select your city</option>
                                    </select>
                                </div>

                                <div className="mt-6 ml-6 ">
                                    <label for="name" className="font-semibold text-base">Date</label><br />
                                    <select className="w-[356px] h-14 rounded-xl bg-[#F6F7F9] p-5">
                                        <option>Select your date</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mt-12 ml-6 ">
                                    <label for="name" className="font-semibold text-base">Time</label><br />
                                    <select className="w-[356px] h-14 rounded-xl bg-[#F6F7F9] p-5">
                                        <option>Select your time</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div>
                        <input type="radio" className="mt-12 ml-6" /> Drop-Off
                    </div>
                    <div>
                        <form>
                            <div className="flex">
                                <div className="mt-6 ml-6 ">
                                    <label for="name" className="font-semibold text-base">Locations</label><br />
                                    <select className="w-[356px] h-14 rounded-xl bg-[#F6F7F9] p-5">
                                        <option>Select your city</option>
                                    </select>
                                </div>

                                <div className="mt-6 ml-6 ">
                                    <label for="name" className="font-semibold text-base">Date</label><br />
                                    <select className="w-[356px] h-14 rounded-xl bg-[#F6F7F9] p-5">
                                        <option>Select your date</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mt-12 ml-6 ">
                                    <label for="name" className="font-semibold text-base">Time</label><br />
                                    <select className="w-[356px] h-14 rounded-xl bg-[#F6F7F9] p-5">
                                        <option>Select your time</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div>payment3</div>
                <div>payment4</div>
            </div>
            <div>rental summary</div>
        </div>
    )
}

export default Payment