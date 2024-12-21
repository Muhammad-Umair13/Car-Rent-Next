import React from 'react'

const Payment = () => {
    return (
        <div className="w-full h-[2240px] bg-[#F6F7F9] flex">
            <div className="w-[852px] mt-8 ml-8 gap-8">

                <div className="bg-white h-[336px] rounded-[10px]">
                    <div className="ml-6 pt-4">
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

                <div className="w-[852px] h-[664px] mt-8 bg-white rounded-[10px]">
                    <div className="ml-6 pt-4">
                        <p className="font-bold text-xl">Rental Info</p>
                        <p className="font-medium text-sm">Please select your rental date</p>
                    </div>

                    <div>
                        <input type="radio" className="mt-8 ml-6 font-semibold text-base" /> Pick-Up
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
                        <input type="radio" className="mt-12 ml-6  font-semibold text-base" /> Drop-Off
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

                <div className="h-[596px] bg-[#FFFFFF] mt-8 rounded-[10px]">
                    <div className="ml-6 pt-4">
                        <p className="font-bold text-xl">Payment Method</p>
                        <p className="font-medium text-sm">Please enter your payment method</p>
                    </div>
                    <div className="h-[308px] w-[804px] bg-[#F6F7F9] ml-6 rounded-[10px] mt-20">
                        <div>
                            <input type="radio" className="mt-8 ml-6 font-semibold text-base" /> Credit Card
                            {/* image */}
                        </div>

                        <div>
                        <form>
                            <div className="flex">
                                <div className="mt-5 ml-6 ">
                                    <label for="name" className="font-semibold text-base">Card Number</label><br />
                                    <input type="text" id="name" required className="w-[356px] h-14 rounded-xl bg-white p-5" placeholder='Card number'></input>
                                </div>

                                <div className="mt-5 ml-6">
                                    <label for="name" className="font-semibold text-base">Expration Date</label><br />
                                    <input type="date" id="name" required className="w-[356px] h-14 rounded-xl bg-white p-5"></input>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mt-5 ml-6 ">
                                    <label for="name" className="font-semibold text-base">Card Holder</label><br />
                                    <input type="text" id="name" required className="w-[356px] h-14 rounded-xl bg-white p-5" placeholder='Card holder'></input>
                                </div>

                                <div className="mt-5 ml-6">
                                    <label for="name" className="font-semibold text-base">CVC</label><br />
                                    <input type="number" id="name" required className="w-[356px] h-14 rounded-xl bg-white p-5" placeholder='CVC' maxLength={3} minLength={3}></input>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div>option1</div>
                    <div>option2</div>
                </div>

                <div>payment4</div>
            </div>
            <div>rental summary</div>
        </div>
    )
}

export default Payment