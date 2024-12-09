import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { IoMdHeart } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { FaGasPump } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { SiTraccar } from "react-icons/si";
const Detail_Car = () => {
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

                <div className="bg-gray-100">
                    <div className="flex items-center justify-center py-16 px-3">
                        <section className="text-gray-600 body-font overflow-hidden">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="lg:w-4/5 mx-auto flex max-md:flex-col">
                                    <div className="flex flex-col">
                                        <div>
                                            <Image
                                                alt="picture"
                                                className=""
                                                src="/Img/Detail_Car.svg"
                                                height={492}
                                                width={360}
                                            />
                                        </div>
                                        <div className="flex gap-4 m-3">
                                            <Image src="/Img/Detail_Car1.svg" alt='Image' width={100} height={124} className="max-lg:w-[60px]"></Image>
                                            <Image src="/Img/Detail_Car2.svg" alt='Image' width={100} height={120} className="max-lg:w-[60px]"></Image>
                                            <Image src="/Img/Detail_Car3.svg" alt='Image' width={100} height={124} className="max-lg:w-[60px]"></Image>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                        <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                            BRAND NAME
                                        </h2>
                                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                        Nissan GT-R
                                        </h1>
                                        <div className="flex mb-4">
                                            <span className="flex items-center">
                                                <svg
                                                    fill="currentColor"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    className="w-4 h-4 text-yellow-500"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                                <svg
                                                    fill="currentColor"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    className="w-4 h-4 text-yellow-500"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                                <svg
                                                    fill="currentColor"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    className="w-4 h-4 text-yellow-500"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                                <svg
                                                    fill="currentColor"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    className="w-4 h-4 text-yellow-500"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    className="w-4 h-4 text-gray-500"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                                <span className="text-gray-600 ml-3">4 Reviews</span>
                                            </span>
                                        </div>
                                        <p className="leading-relaxed">
                                        The Nissan GT-R is a sports car with the best design and acceleration, providing both safety and comfort while driving. Its the embodiment of Nissans outstanding performance, inspired by the race track.
                                        </p>
                                        <div className="flex">
                                            <span className="title-font font-medium text-2xl text-gray-900">
                                                $80.00
                                            </span>
                                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                                    Rent Now
                                            </button>
                                            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                                <svg
                                                    fill="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                    <section className="text-gray-600 body-font w-[78%] ml-20">
                        <div className="container mx-auto">
                            <div className="flex justify-between -m-4 max-lg:flex-col">

                                {/* Box 1 */}
                                <div className="p-4" style={{ width: '304px', height: '388px' }}>
                                    <div className="border rounded-lg p-4 bg-white">
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
                                    </div>
                                </div>

                                {/* Box 2 */}
                                <div className="p-4" style={{ width: '304px', height: '388px' }}>
                                    <div className="border rounded-lg p-4 bg-white">
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
                                </div>

                                {/* Box 3 */}
                                <div className="p-4 w-[304px] h-[388px]">
                                    <div className="border rounded-lg p-4 bg-white">
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
                                </div>

                                {/* Box 4 */}
                                <div className="p-4 hidden" style={{ width: '304px', height: '388px' }}>
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
                            <div className="flex justify-between -m-4 max-lg:flex-col">

                                {/* Box 1 */}
                                <div className="p-4" style={{ width: '304px', height: '388px' }}>
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
                                <div className="p-4" style={{ width: '304px', height: '388px' }}>
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
                                <div className="p-4 hidden" style={{ width: '304px', height: '388px' }}>
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

                        <div className="flex justify-center mt-3">
                            <Button className="bg-blue-700">Show more car</Button>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    )
}

export default Detail_Car