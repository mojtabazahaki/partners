import Cart from "./Cart";
import { useState, useEffect, useRef } from "react";
import Moreabout from "./Moreabout";




const Service: React.FC = () => {

    const [isElementVisible, setIsElementVisible] = useState<boolean>(false);



    const elementRef = useRef<HTMLDivElement>(null);



    useEffect(() => {

        const handleScroll = () => {

            const element = elementRef.current;

            if (element) {
                const elementTop = element.getBoundingClientRect().top;

                if (elementTop < 250) {
                    setIsElementVisible(true);
                }


            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {

            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={elementRef} className=" h-auto w-full bg-[#150f28] p-[15px] max-lg:p-[25px]">
            <div className="p-[84px] max-lg:p-0">
                <div>
                    <h3 className="text-[13px] text-[#caa675] max-lg:text-center" >SERVICE WRAPPED AROUND  YOU</h3>
                </div>
                <br />
                <div>
                    <p className="text-[17px] text-[#cdc7c7] font-light max-lg:text-center ">
                        Our business success is based on strong partnerships. Without them we wouldn't have been able to transact over US <strong className=" text-white" >$7.5 billion</strong> in foreign currency and make more than<strong className=" text-white"> 300,000 payments</strong> on behalf of our clients, as we did last year. Whether you're an individual, a business or a potential partner, we're here to help you.
                    </p>
                </div>
            </div>
            <Cart scrool={isElementVisible} />
            <Moreabout />
        </div>
    )
}



export default Service;