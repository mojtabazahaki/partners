



const PhoneFooter: React.FC = () => {

    return (
        <div className=" w-[39%]  max-lg:mt-16 max-lg:w-full max-lg:px-11">
            <div className=" flex">
                <img src="assets/Logoe.png" alt="" />
                <div >
                    <select id="TF" name="tarafdari" className=" cursor-pointer text-[10px] text-white  bg-[#150F28] ml-4">
                        <option value="english">ENG</option>
                        <option value="persian">PER</option>
                    </select>
                </div>
            </div>
            <section>
                <p className=" text-[13px] text-white my-[43px]">
                    Since 2003, we’ve made it simple for over 150,000 clients to transfer money to more than 125 markets across the world. We're a specialist financial services provider and we move money overseas.
                </p>
            </section>
            <address className="flex">
                <i className="before:content-[url(assets/Mobile.svg)] "></i>
                <h3 className=" text-white ml-[12px]  not-italic flex items-start">
                    +44 (0) 203 763 9870
                </h3>

            </address>
            <br />
            <address className="flex">
                <i className="before:content-[url(assets/sms.svg)] "></i>
                <h3 className=" text-white ml-[12px]   not-italic flex items-start">
                    info@gcpartners.co
                </h3>

            </address>
        </div>
    )
}


export default PhoneFooter;