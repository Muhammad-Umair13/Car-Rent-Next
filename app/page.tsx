import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { LuArrowUpDown } from "react-icons/lu";
import { IoMdHeart } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { FaGasPump } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { SiTraccar } from "react-icons/si";

export default function Home() {
  return (
    <div>
      <div className="w-full bg-[#F6F7F9]">

        <div className="flex gap-[27px] justify-center">
          <div className="w-[640px] h-[360px] bg-[#54A6FF] rounded-[10px] mt-8">
            <div className="w-[284px] h-[224px] p-6 gap-5">
              <p className="font-semibold text-[32px] text-white w-[274px]">The Best Platform for Car Rental</p>
              <p className="font-medium text-base w-[284px] text-white">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
              <Button className="bg-[#3563E9]  hover:bg-blue-900 px-5 mt-5">Rental Car</Button>
            </div>
            <div className="ml-24">
              <Image src="/Img/Car-image.svg" alt='car' width={406} height={116}></Image>
            </div>
          </div>
          <div className="w-[640px] h-[360px] bg-[#54A6FF] rounded-[10px] mt-8 max-lg:hidden">
            <div className="w-[284px] h-[224px] p-6 gap-5">
              <p className="font-semibold text-[32px] text-white w-[280px]">Easy way to rent a car at a low pricel</p>
              <p className="font-medium text-base w-[284px] text-white">Providing cheap car rental services and safe and comfortable facilities.</p>
              <Button className="bg-[#3563E9]  hover:bg-blue-900 px-5 mt-5">Rental Car</Button>
            </div>
            <div className="ml-24">
              <Image src="/Img/Car2-image.svg" alt='car' width={340} height={108}></Image>
            </div>
          </div>
        </div>


        <div className="flex items-center justify-center bg-gray-100 py-16 px-5">
          <div className="flex items-center bg-white rounded-lg shadow-lg flex-col lg:flex-row">
            {/* Pick-Up Section */}
            <div className="flex flex-col space-y-2 p-6 bg-white rounded-lg shadow-sm mb-4 lg:mb-0">
              <div className="text-lg font-semibold text-blue-600">Pick-Up</div>
              <div className="flex flex-wrap gap-4 lg:gap-8">
                <div className="w-full lg:w-auto">
                  <label className="block text-gray-500 text-sm mb-1">Locations</label>
                  <select
                    className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full lg:w-32"
                    style={{ height: "48px" }}
                  >
                    <option>Select your city</option>
                  </select>
                </div>
                <div className="w-full lg:w-auto">
                  <label className="block text-gray-500 text-sm mb-1">Date</label>
                  <input
                    type="date"
                    className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full lg:w-32"
                    style={{ height: "48px" }}
                  />
                </div>
                <div className="w-full lg:w-auto">
                  <label className="block text-gray-500 text-sm mb-1">Time</label>
                  <select
                    className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full lg:w-32"
                    style={{ height: "48px" }}
                  >
                    <option>Select your time</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Switch Button */}
            <div className="flex items-center justify-center mx-6 my-4 lg:my-0">
              <button className="bg-blue-600 text-white rounded-xl p-4 shadow-lg hover:bg-blue-700">
                <LuArrowUpDown />
              </button>
            </div>

            {/* Drop-Off Section */}
            <div className="flex flex-col space-y-2 p-6 bg-white rounded-lg shadow-sm">
              <div className="text-lg font-semibold text-blue-600">Drop-Off</div>
              <div className="flex flex-wrap gap-4 lg:gap-8">
                <div className="w-full lg:w-auto">
                  <label className="block text-gray-500 text-sm mb-1">Locations</label>
                  <select
                    className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full lg:w-32"
                    style={{ height: "48px" }}
                  >
                    <option>Select your city</option>
                  </select>
                </div>
                <div className="w-full lg:w-auto">
                  <label className="block text-gray-500 text-sm mb-1">Date</label>
                  <input
                    type="date"
                    className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full lg:w-32"
                    style={{ height: "48px" }}
                  />
                </div>
                <div className="w-full lg:w-auto">
                  <label className="block text-gray-500 text-sm mb-1">Time</label>
                  <select
                    className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full lg:w-32"
                    style={{ height: "48px" }}
                  >
                    <option>Select your time</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-6">
                <span className="font-semibold text-base text-[#90A3BF]">Popular Car</span>
                <span><a href="/Category" className="text-blue-700">View All</a></span>
              </div>
              <div className="flex flex-wrap justify-between -m-4">

                {/* Box 1 */}
                <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <div className="border rounded-lg p-4 h-full flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex justify-between">
                        <h2 className="text-gray-900 title-font text-lg font-medium">Koenigsegg</h2>
                        <span>
                          <IoMdHeart className="text-red-600" />
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">Sport</p>
                      <Image
                        src="/Img/Car-image.svg"
                        alt="Koenigsegg"
                        width={232}
                        height={172}
                        className="my-10"
                      />
                      <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                        <FaGasPump /> 90L
                        <SiTraccar /> Manual
                        <MdPeopleAlt /> 2 People
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-gray-900 text-lg font-medium">$99.00/day</p>
                      <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                    </div>
                  </div>
                </div>

                {/* Box 2 */}
                <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-md:hidden">
                  <div className="border rounded-lg p-4 h-full flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex justify-between">
                        <h2 className="text-gray-900 title-font text-lg font-medium">Nissan GT-R</h2>
                        <span>
                          <GoHeart />
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">Sport</p>
                      <Image
                        src="/card-img/Car-1.svg"
                        alt="Nissan GT-R"
                        width={232}
                        height={72}
                        className="my-10"
                      />
                      <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                        <FaGasPump /> 80L
                        <SiTraccar /> Manual
                        <MdPeopleAlt /> 2 People
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-gray-900 text-lg font-medium">$80.00/day</p>
                      <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                    </div>
                  </div>
                </div>

                {/* Box 3 */}
                <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-md:hidden">
                  <div className="border rounded-lg p-4 h-full flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex justify-between">
                        <h2 className="text-gray-900 title-font text-lg font-medium">Rolls-Royce</h2>
                        <span>
                          <IoMdHeart className="text-red-600" />
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">Sedan</p>
                      <Image
                        src="/card-img/Car-10.svg"
                        alt="Rolls-Royce"
                        width={232}
                        height={72}
                        className="my-10"
                      />
                      <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                        <FaGasPump /> 70L
                        <SiTraccar /> Manual
                        <MdPeopleAlt /> 4 People
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-gray-900 text-lg font-medium">$96.00/day</p>
                      <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                    </div>
                  </div>
                </div>

                {/* Box 4 */}
                <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-md:hidden">
                  <div className="border rounded-lg p-4 h-full flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex justify-between">
                        <h2 className="text-gray-900 title-font text-lg font-medium">Nissan GT-R</h2>
                        <span>
                          <GoHeart />
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">Sport</p>
                      <Image
                        src="/card-img/car-9.svg"
                        alt="Nissan GT-R"
                        width={232}
                        height={72}
                        className="my-10"
                      />
                      <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                        <FaGasPump /> 80L
                        <SiTraccar /> Manual
                        <MdPeopleAlt /> 2 People
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-gray-900 text-lg font-medium">$80.00/day</p>
                      <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="container mx-auto mt-5 px-4">
              <div className="flex justify-between items-center mb-6">
                <span className="font-semibold text-base text-[#90A3BF]">Recommendation Car</span>
              </div>
              <div className="flex flex-wrap justify-between -m-4">

                {/* Box 1 */}
                <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <div className="border rounded-lg p-4 h-full flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex justify-between">
                        <h2 className="text-gray-900 title-font text-lg font-medium">All New Rush</h2>
                        <span>
                          <IoMdHeart className="text-red-600" />
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">SUV</p>
                      <Image
                        src="/card-img/Car-2.svg"
                        alt="All New Rush"
                        width={232}
                        height={172}
                        className="my-10"
                      />
                      <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                        <FaGasPump /> 90L
                        <SiTraccar /> Manual
                        <MdPeopleAlt /> 2 People
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-gray-900 text-lg font-medium">$72.00/day</p>
                      <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                    </div>
                  </div>
                </div>

                {/* Box 2 */}
                <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <div className="border rounded-lg p-4 h-full flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex justify-between">
                        <h2 className="text-gray-900 title-font text-lg font-medium">CR-V</h2>
                        <span>
                          <GoHeart />
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">SUV</p>
                      <Image
                        src="/card-img/Car-4.svg"
                        alt="CR-V"
                        width={232}
                        height={72}
                        className="my-10"
                      />
                      <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                        <FaGasPump /> 80L
                        <SiTraccar /> Manual
                        <MdPeopleAlt /> 2 People
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-gray-900 text-lg font-medium">$80.00/day</p>
                      <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                    </div>
                  </div>
                </div>

                {/* Box 3 */}
                <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <div className="border rounded-lg p-4 h-full flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex justify-between">
                        <h2 className="text-gray-900 title-font text-lg font-medium">All New Terios</h2>
                        <span>
                          <IoMdHeart className="text-red-600" />
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">Sedan</p>
                      <Image
                        src="/card-img/Car-3.svg"
                        alt="All New Terios"
                        width={232}
                        height={72}
                        className="my-10"
                      />
                      <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                        <FaGasPump /> 70L
                        <SiTraccar /> Manual
                        <MdPeopleAlt /> 4 People
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-gray-900 text-lg font-medium">$96.00/day</p>
                      <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                    </div>
                  </div>
                </div>

                {/* Box 4 */}
                <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <div className="border rounded-lg p-4 h-full flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex justify-between">
                        <h2 className="text-gray-900 title-font text-lg font-medium">CR-V</h2>
                        <span>
                          <GoHeart />
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">Sport</p>
                      <Image
                        src="/card-img/car-4.svg"
                        alt="CR-V"
                        width={232}
                        height={72}
                        className="my-10"
                      />
                      <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                        <FaGasPump /> 80L
                        <SiTraccar /> Manual
                        <MdPeopleAlt /> 2 People
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-gray-900 text-lg font-medium">$76.00/day</p>
                      <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>


            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-between -m-4">

                {/* Box 1 */}
                <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <div className="border rounded-lg p-4 h-full flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex justify-between">
                        <h2 className="text-gray-900 title-font text-lg font-medium">MG ZX Exclusice</h2>
                        <span>
                          <IoMdHeart className="text-red-600" />
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">Sport</p>
                      <Image
                        src="/card-img/Car-8.svg"
                        alt="Koenigsegg"
                        width={232}
                        height={172}
                        className="my-10"
                      />
                      <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                        <FaGasPump /> 90L
                        <SiTraccar /> Manual
                        <MdPeopleAlt /> 2 People
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-gray-900 text-lg font-medium">$99.00/day</p>
                      <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                    </div>
                  </div>
                </div>

                {/* Box 2 */}
                <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <div className="border rounded-lg p-4 h-full flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex justify-between">
                        <h2 className="text-gray-900 title-font text-lg font-medium">New MG ZS</h2>
                        <span>
                          <GoHeart />
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">Sport</p>
                      <Image
                        src="/card-img/Car-7.svg"
                        alt="Nissan GT-R"
                        width={232}
                        height={72}
                        className="my-10"
                      />
                      <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                        <FaGasPump /> 80L
                        <SiTraccar /> Manual
                        <MdPeopleAlt /> 2 People
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-gray-900 text-lg font-medium">$80.00/day</p>
                      <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                    </div>
                  </div>
                </div>

                {/* Box 3 */}
                <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <div className="border rounded-lg p-4 h-full flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex justify-between">
                        <h2 className="text-gray-900 title-font text-lg font-medium">MG ZS Excite</h2>
                        <span>
                          <IoMdHeart className="text-red-600" />
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">Sedan</p>
                      <Image
                        src="/card-img/Car-8.svg"
                        alt="Rolls-Royce"
                        width={232}
                        height={72}
                        className="my-10"
                      />
                      <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                        <FaGasPump /> 70L
                        <SiTraccar /> Manual
                        <MdPeopleAlt /> 4 People
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-gray-900 text-lg font-medium">$74.00/day</p>
                      <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                    </div>
                  </div>
                </div>

                {/* Box 4 */}
                <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <div className="border rounded-lg p-4 h-full flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex justify-between">
                        <h2 className="text-gray-900 title-font text-lg font-medium">New MG ZS</h2>
                        <span>
                          <GoHeart />
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">Sport</p>
                      <Image
                        src="/card-img/car-9.svg"
                        alt="Nissan GT-R"
                        width={232}
                        height={72}
                        className="my-10"
                      />
                      <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                        <FaGasPump /> 80L
                        <SiTraccar /> Manual
                        <MdPeopleAlt /> 2 People
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-gray-900 text-lg font-medium">$80.00/day</p>
                      <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>


            <div className="flex justify-center my-5 mb-5">
              <Button className="bg-blue-700 hover:bg-blue-900 "><a href="/Category">Show more car</a></Button>
            </div>

          </section>



        </div>

      </div>
    </div>
  );
}
