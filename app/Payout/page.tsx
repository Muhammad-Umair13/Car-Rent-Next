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

                <div className="flex flex-col items-center justify-center py-16 px-3 md:px-0">
                    <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Payment Method</h2>
                        <div className="flex justify-between items-center mb-6"> <div className="flex items-center space-x-2">
                            <input type="radio" id="creditCard" name="paymentMethod" className="form-radio text-blue-600" />
                            <label htmlFor="creditCard" className="text-lg font-semibold text-gray-700 flex items-center space-x-2">
                                <span>Credit Card</span>
                                {/* <FaCcVisa className="text-2xl text-blue-600" /> */}
                                {/* <FaCcMastercard className="text-2xl text-orange-600" />  */}
                            </label>
                        </div>
                            <div className="flex items-center space-x-2">
                                <input type="radio" id="paypal" name="paymentMethod" className="form-radio text-blue-600" />
                                <label htmlFor="paypal" className="text-lg font-semibold text-gray-700 flex items-center space-x-2">
                                    <span>PayPal</span>
                                    {/* <FaPaypal className="text-2xl text-blue-600" />  */}
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="radio" id="bitcoin" name="paymentMethod" className="form-radio text-blue-600" /> <label htmlFor="bitcoin" className="text-lg font-semibold text-gray-700 flex items-center space-x-2"> <span>Bitcoin</span>
                                    {/* <FaBitcoin className="text-2xl text-orange-600" />  */}
                                </label> </div> </div> <div className="space-y-4"> <div> <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber"> Card Number </label> <input type="text" id="cardNumber" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Card Number" /> </div> <div className="grid grid-cols-2 gap-4"> <div> <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expirationDate"> Expiration Date </label> <input type="text" id="expirationDate" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="DD/MM/YY" /> </div> <div> <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardHolder"> Card Holder </label> <input type="text" id="cardHolder" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Card Holder" /> </div> <div> <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvc"> CVC </label> <input type="text" id="cvc" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="CVC" /> </div> </div> </div> </div> </div>

                <div>payment4</div>
            </div>
            <div>rental summary</div>
        </div>
    )
}

export default Payment