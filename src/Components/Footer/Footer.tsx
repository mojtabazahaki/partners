import Listfooter from "../../pages/Homepage/components/Listfooter";
import PhoneFooter from "./Components/PhoneFooter";



const Footer: React.FC = () => {


    return (

        <footer className=" w-full  flex justify-center">
            <div className=" max-lg:w-full">
                <div className="flex justify-center w-[1000px] max-lg:w-full ">
                    <div className=" max-lg:w-full bg-[#150f28]  max-lg:flex-col-reverse   h-auto flex pl-[60px]  py-[60px] pr-0 max-lg:py-[3rem] max-lg:px-0 ">
                        <PhoneFooter />
                        <Listfooter />
                    </div>
                </div>
                <div className="  flex justify-center w-[1000px] max-lg:w-full" >
                    <div className="w-[1000px] flex   h-[4rem]  items-center">
                        <p className=" ml-[5rem] text-[#150F28]  text-[13px] max-sm:!ml-8" >Copyright © 2023 GC Partners. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer >
    )
}



export default Footer;