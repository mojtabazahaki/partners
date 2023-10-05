



const Contact: React.FC = () => {

    return (

        <div className="flex  justify-between max-lg:justify-center h-[24rem]">
            <div className="flex   w-[36%] max-lg:w-full max-lg:px-5">
                <div className=" mt-[4rem] max-lg:w-full">
                    <div>
                        <div className="">
                            <h4 className=" font-light text-[20px] max-lg:text-center">
                                CONTACT US
                            </h4>
                            <h1 className="leading-[2.7rem] text-[50px] max-lg:text-center">
                                READY TO  FIND
                                OUT MORE ?
                            </h1>
                        </div>
                        <br />
                        <div>
                            <p className=" font-light max-lg:text-center">
                                For more information or to speak to our specialists, please fill in the contact form.                                    </p>
                        </div>
                        <br />
                        <div className="max-lg:text-center">
                            <button className="duration-150 hover:scale-[1.04] px-[13px] py-[6px] border-solid border-[1px] text-[13px] border-black" >GET IN TOUCH</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-[36%] max-lg:hidden">
                <img className=" h-[32rem]" src="assets/Group 5.png" alt="" />
            </div>

            <div className="flex items-center max-lg:hidden">
                <div>
                    <div className=" w-[156px] h-[77.5px] bg-black  rounded-t-[0px] rounded-b-[100px]">
                    </div>
                    <div className=" w-[156px] relative top-[-84px] left-[-1rem]  h-[77.5px] z-10  bg-[#C0A615] rounded-t-[0px] rounded-b-[100px]">
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contact;