import { useState } from "react";
import UnderlistMore from "./Components/UnderlistMore";
import ListNavLink from "./Components/ListNavLink";


const Navbar: React.FC = () => {

    const [underList, setUnderList] = useState<boolean>(false)
    const [menu, setMenu] = useState<boolean>(false)

    return (

        <nav className=" rounded-[3px]  max-lg:shadow-none max-lg:w-full   2xl:w-full bg-[#F5F5F5] w-[94%] h-20 mt-8 shadow-[0px_2px_4px_1px_#dedede] flex items-center justify-center ">
            <div className="flex max-md:justify-between  justify-around items-center w-full 2xl:w-[1000px] 2xl:justify-between px-[10px]">
                <div className="flex ma">
                    <span>
                        <img src="assets/Logostart.png" alt="" />
                    </span>
                    <span className=" flex">
                        <select id="TF" name="tarafdari" className=" cursor-pointer text-[10px]  bg-[#F5F5F5] ml-4">
                            <option value="english">ENG</option>
                            <option value="persian">PER</option>
                        </select>
                    </span>
                </div>
                <UnderlistMore setUnder={setUnderList} underList={underList} />
                <div className={`${menu ? 'max-lg:animate-[Nanbar13_0s_ease-out_0s_1_both]' : ' max-lg:animate-[Nanbar12_0s_ease-out_.3s_1_both]'}  max-lg:fixed max-lg:w-full max-lg:top-0 max-lg:h-screen max-lg:z-[200]  max-lg:right-0 max-lg:bg-[#9291915c]`}>
                    <div className={`${menu ? ' max-lg:animate-[Nanbar14_.3s_ease-out_0s_1_both] ' : 'max-lg:animate-[Nanbar15_.3s_ease-out_0s_1_both] '}  max-lg:fixed  max-lg:!flex-col flex max-lg:h-screen  max-lg:z-50 max-lg:left-0 max-lg:top-0 max-lg:w-[22rem] max-lg:bg-[#150F28]`}>
                        <div className=" mb-10  justify-between hidden max-lg:!flex p-[20px] items-center">
                            <div>
                                <img src="assets/Logoe.png" alt="" />
                            </div>
                            <div>
                                <i onClick={() => {
                                    setMenu(false)
                                    setUnderList(false)
                                }} className="before:duration-200 cursor-pointer before:content-[url(assets/Exit.svg)] before:flex before:rounded-[4px] before:hover:bg-[#444238]"></i>
                            </div>
                        </div>
                        <div className=" max-lg:px-[10px]">
                            <button className=" max-lg:text-start max-lg:px-[2rem] max-lg:!border-0 lg:hover:bg-[#C0A615] duration-150  max-lg:w-full max-lg:rounded-none max-lg:h-10  max-lg:hover:bg-[#444238] max-lg:text-white text-black lg:hover:text-white rounded-[2px] lg:py-[2px] lg:px-[8px]  border-solid border-[1px] border-[#C0A615] text-[14px]"  >LOGIN</button>
                        </div>
                        <div className=" max-lg:px-[10px]">
                            <button className="rounded-[2px]  max-lg:text-start max-lg:px-[2rem] max-lg:border-b-0  max-lg:border-x-0 max-lg:hover:bg-[#444238] duration-200 max-lg:w-full border-solid max-lg:rounded-none max-lg:h-10  lg:hover:text-black text-[14px] lg:py-[3px] max-lg:!ml-0 ml-[10px] lg:px-[8px]  lg:bg-[#C0A615] text-white">REGISTER</button>
                        </div>
                        <ListNavLink setUnder={setUnderList} underList={underList} />
                    </div>

                </div>

                <i onClick={() => {
                    setMenu(true)
                    setUnderList(false)
                }} className=" cursor-pointer before:content-[url(assets/Menu.svg)] before:flex  lg:hidden"></i>
            </div>
        </nav>
    )
}


export default Navbar;