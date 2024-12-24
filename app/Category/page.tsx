import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { LuArrowUpDown } from "react-icons/lu";
import { IoMdHeart } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { FaGasPump } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { SiTraccar } from "react-icons/si";
const Category = () => {
    return (
        <div>
            <div className="flex">
                <div>
                    <div className="w-72 p-6 max-lg:hidden">
                        <div className="mb-8">
                            <h3 className="text-[10px]  mb-4 text-[#90A3BF]">TYPE</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <input type="checkbox" defaultChecked className="mr-2" />
                                    <span>Sport</span>
                                    <span className="text-[#90A3BF]">(10)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input type="checkbox" defaultChecked className="mr-2" />
                                    <span>SUV</span>
                                    <span className="text-[#90A3BF]">(12)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input type="checkbox" className="mr-2" />
                                    <span>MPV</span>
                                    <span className="text-[#90A3BF]">(16)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input type="checkbox" className="mr-2" />
                                    <span>Sedan</span>
                                    <span className="text-[#90A3BF]">(20)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input type="checkbox" className="mr-2" />
                                    <span>Coupe</span>
                                    <span className="text-[#90A3BF]">(14)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input type="checkbox" className="mr-2" />
                                    <span>Hatchback</span>
                                    <span className="text-[#90A3BF]">(14)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-[10px] mb-4 text-[#90A3BF]">CAPACITY</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <input type="checkbox" defaultChecked className="mr-2" />
                                    <span>2 Person</span>
                                    <span className="text-[#90A3BF]">(10)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input type="checkbox" className="mr-2" />
                                    <span>4 Person</span>
                                    <span className="text-[#90A3BF]">(4)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input type="checkbox" className="mr-2" />
                                    <span>6 Person</span>
                                    <span className="text-[#90A3BF]">(12)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input type="checkbox" defaultChecked className="mr-2" />
                                    <span>8 or More</span>
                                    <span className="text-[#90A3BF]">(16)</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">PRICE</h3>
                            <input type="range" min="0" max="100" className="w-full mb-2" />
                            <p className="text-sm">Max. $100.00</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 w-full">
                    <div className="flex items-center justify-center py-16 px-3 max-md:px-0">
                        <div className="flex flex-row items-center rounded-lg shadow-lg max-lg:flex-col">
                            {/* Pick-Up Section */}
                            <div className="flex flex-col space-y-2 p-3 rounded-lg shadow-sm bg-white">
                                <div className="text-lg font-semibold text-blue-600">Pick-Up</div>
                                <div className="flex flex-wrap gap-8">
                                    <div>
                                        <label className="block text-gray-500 text-sm mb-1">Locations</label>
                                        <select
                                            className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            style={{ width: "126px", height: "48px" }}
                                        >
                                            <option>Select your city</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-500 text-sm mb-1">Date</label>
                                        <input
                                            type="date"
                                            className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            style={{ width: "126px", height: "48px" }}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-500 text-sm mb-1">Time</label>
                                        <select
                                            className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            style={{ width: "126px", height: "48px" }}
                                        >
                                            <option>Select your time</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Switch Button */}
                            <div className="flex items-center justify-center mx-6 mt-4 lg:mt-0">
                                <button className="bg-blue-600 text-white rounded-xl p-4 shadow-lg hover:bg-blue-700">
                                    <LuArrowUpDown />
                                </button>
                            </div>

                            {/* Drop-Off Section */}
                            <div className="flex flex-col space-y-2 p-3 rounded-lg shadow-sm bg-white">
                                <div className="text-lg font-semibold text-blue-600">Drop-Off</div>
                                <div className="flex flex-wrap gap-8">
                                    <div>
                                        <label className="block text-gray-500 text-sm mb-1">Locations</label>
                                        <select
                                            className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            style={{ width: "126px", height: "48px" }}
                                        >
                                            <option>Select your city</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-500 text-sm mb-1">Date</label>
                                        <input
                                            type="date"
                                            className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            style={{ width: "126px", height: "48px" }}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-500 text-sm mb-1">Time</label>
                                        <select
                                            className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            style={{ width: "126px", height: "48px" }}
                                        >
                                            <option>Select your time</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <section className="text-gray-600 body-font w-[78%] ml-20 max-lg:m-0 max-md:ml-5">
                        <div className="container mx-auto">
                            <div className="flex justify-between lg:flex-row max-md:flex-col ">

                                {/* Box 1 */}
                                <div className="p-4" style={{ width: '300px', height: '388px' }}>
                                    <a href="/Detail"><div className="border rounded-lg p-4 bg-white">
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
                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-900 text-lg font-medium">$99.00/day</p>
                                            <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                                        </div>
                                    </div></a>
                                </div>

                                {/* Box 2 */}
                                <div className="p-4" style={{ width: '300px', height: '388px' }}>
                                    <a href="/Detail"><div className="border rounded-lg p-4 bg-white">
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
                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-900 text-lg font-medium">$80.00/day</p>
                                            <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                                        </div>
                                    </div>
                                    </a>
                                </div>

                                {/* Box 3 */}
                                <div className="p-4 w-[300px] h-[388px]">
                                    <a href="/Detail"><div className="border rounded-lg p-4 bg-white">
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
                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-900 text-lg font-medium">$96.00/day</p>
                                            <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                                        </div>
                                    </div>
                                    </a>
                                </div>

                                {/* Box 4 */}
                                <div className="p-4 hidden" style={{ width: '300px', height: '388px' }}>
                                    <div className="border rounded-lg p-4 bg-white">
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
                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-900 text-lg font-medium">$80.00/day</p>
                                            <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="container mx-auto mt-5">
                            <div className="flex justify-between -m-4 lg:flex-row max-md:flex-col">

                                {/* Box 1 */}
                                <div className="p-4" style={{ width: '300px', height: '388px' }}>
                                    <div className="border rounded-lg p-4 bg-white">
                                        <div className="flex justify-between">
                                            <h2 className="text-gray-900 title-font text-lg font-medium">All New Rush</h2>
                                            <span>
                                                <IoMdHeart className="text-red-600" />
                                            </span>
                                        </div>
                                        <p className="text-gray-500 text-sm mb-4">SUV</p>
                                        <Image
                                            src="/card-img/Car-2.svg"
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
                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-900 text-lg font-medium">$72.00/day</p>
                                            <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Box 2 */}
                                <div className="p-4" style={{ width: '300px', height: '388px' }}>
                                    <div className="border rounded-lg p-4 bg-white">
                                        <div className="flex justify-between">
                                            <h2 className="text-gray-900 title-font text-lg font-medium">CR -V</h2>
                                            <span>
                                                <GoHeart />
                                            </span>
                                        </div>
                                        <p className="text-gray-500 text-sm mb-4">SUV</p>
                                        <Image
                                            src="/card-img/Car-4.svg"
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
                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-900 text-lg font-medium">$80.00/day</p>
                                            <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Box 3 */}
                                <div className="p-4 w-[304px] h-[388px]">
                                    <div className="border rounded-lg p-4 bg-white">
                                        <div className="flex justify-between">
                                            <h2 className="text-gray-900 title-font text-lg font-medium">All New Terios</h2>
                                            <span>
                                                <IoMdHeart className="text-red-600" />
                                            </span>
                                        </div>
                                        <p className="text-gray-500 text-sm mb-4">Sedan</p>
                                        <Image
                                            src="/card-img/Car-3.svg"
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
                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-900 text-lg font-medium">$96.00/day</p>
                                            <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Box 4 */}
                                <div className="p-4 hidden" style={{ width: '300px', height: '388px' }}>
                                    <div className="border rounded-lg p-4 bg-white">
                                        <div className="flex justify-between">
                                            <h2 className="text-gray-900 title-font text-lg font-medium">CR -V</h2>
                                            <span>
                                                <GoHeart />
                                            </span>
                                        </div>
                                        <p className="text-gray-500 text-sm mb-4">Sport</p>
                                        <Image
                                            src="/card-img/car-4.svg"
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
                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-900 text-lg font-medium">$76.00/day</p>
                                            <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="container mx-auto">
                            <div className="flex justify-between -m-4 lg:flex-row max-md:flex-col">

                                {/* Box 1 */}
                                <div className="p-4" style={{ width: '304px', height: '388px' }}>
                                    <div className="border rounded-lg p-4 bg-white">
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
                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-900 text-lg font-medium">$99.00/day</p>
                                            <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Box 2 */}
                                <div className="p-4" style={{ width: '304px', height: '388px' }}>
                                    <div className="border rounded-lg p-4 bg-white">
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
                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-900 text-lg font-medium">$80.00/day</p>
                                            <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Box 3 */}
                                <div className="p-4 w-[304px] h-[388px]">
                                    <div className="border rounded-lg p-4 bg-white">
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
                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-900 text-lg font-medium">$74.00/day</p>
                                            <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Box 4 */}
                                <div className="p-4 hidden" style={{ width: '304px', height: '388px' }}>
                                    <div className="border rounded-lg p-4 bg-white">
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
                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-900 text-lg font-medium">$80.00/day</p>
                                            <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="flex justify-center mt-3">
                            <Button className="bg-blue-700 hover:bg-blue-900">Show more car</Button>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    )
}

export default Category;