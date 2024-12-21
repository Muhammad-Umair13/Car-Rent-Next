import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
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
                    <div className="h-14 w-[804px] bg-[#F6F7F9] ml-6 rounded-[10px] mt-3 p-3 flex gap-[600px]">
                        <div >
                            <input type="radio" className="font-semibold text-base size-4 mt-1" /> Paypal
                        </div>
                        <div>
                            <Image src="/Icons/Paypal.svg" alt='paypal' width={92} height={20} />
                        </div>
                    </div>
                    <div className="h-14 w-[804px] bg-[#F6F7F9] ml-6 rounded-[10px] mt-3 p-3 flex gap-[600px]">
                        <div >
                            <input type="radio" className="font-semibold text-base size-4 mt-1" /> Bitcoin
                        </div>
                        <div>
                            <Image src="/Icons/Bitcoin.svg" alt='Bitcoin' width={92} height={20} />
                        </div>
                    </div>
                </div>

                <div className="h-[484px] rounded-[10px] bg-white mt-8">
                    <div className="ml-6 pt-4">
                        <p className="font-bold text-xl">Confirmation</p>
                        <p className="font-medium text-sm">We are getting to the end. Just few clicks and your rental is ready!</p>
                    </div>
                    <div>

                        <div className="h-14 w-[804px] bg-[#F6F7F9] ml-6 rounded-[10px] mt-8 p-3">
                            <div className="flex gap-3">
                                <input type="checkbox" className="font-semibold text-base size-4 mt-1" />
                                <p className="font-semibold text-base">I agree with sending an Marketing and newsletter emails. No spam, promissed!</p>
                            </div>
                        </div>
                        <div className="h-14 w-[804px] bg-[#F6F7F9] ml-6 rounded-[10px] mt-3 p-3">
                            <div className="flex gap-3">
                                <input type="checkbox" className="font-semibold text-base size-4 mt-1" />
                                <p className="font-semibold text-base">I agree with our terms and conditions and privacy policy.</p>
                            </div>
                        </div>
                        <div className="h-14 w-[140px] bg-[#F6F7F9] ml-6 rounded-[10px] mt-3 p-3">
                            <button className="h-14 w-[140px] bg-[#3563E9] text-white rounded-xl font-semibold text-sm">Rent Now</button>
                        </div>

                        <div className="mt-10 ml-6 space-y-1">
                            <Image src="/Icons/safety.svg" alt='safety' width={32} height={32} />
                            <p className="font-semibold text-base">All your data are safe</p>
                            <p className="font-medium text-sm text-[#90A3BF]">We are using the most advanced security to provide you the best experience ever.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 ml-8 bg-white w-[392px] h-[560px] rounded-[10px]">
                <div className="w-[375px] bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-6"> <h2 className="text-xl font-bold mb-4 text-gray-900">Rental Summary</h2>
                        <p className="text-gray-600 text-sm mb-4">Prices may change depending on the length of the rental and the price of your rental car.</p>
                        <div className="flex items-center mb-4">
                            <Image src="/Img/Detail_Car.svg" alt="Nissan GT-R" width={160} height={90} className="rounded-lg" />
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-gray-900">Nissan GT-R</h3>
                                <div className="flex items-center text-yellow-500">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-gray-300" />
                                    <span className="ml-1 text-gray-600">440+ Reviewer</span>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between text-gray-700 mb-2">
                                <span>Subtotal</span>
                                <span className="font-bold">$80.00</span>
                            </div>
                            <div className="flex justify-between text-gray-700 mb-2">
                                <span>Tax</span>
                                <span className="font-bold">$0</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between items-center text-gray-700">
                                <input type="text" className="w-[232px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Apply promo code" />
                                <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Apply now</button>
                            </div>
                        </div>
                        <div className="flex justify-between text-gray-900 font-bold text-lg">
                            <span>Total Rental Price</span>
                            <span className="text-3xl">$80.00</span>
                        </div>
                        <p className="text-gray-600 text-sm mt-2">Overall price and includes rental discount</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment