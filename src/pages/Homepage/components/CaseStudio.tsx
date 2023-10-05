import { Datacart2 } from "../DataSlide";
import { TypeCard } from "./Cart";

const CaseStudio: React.FC = () => {


    const createCart: JSX.Element[] = Datacart2.map((data: TypeCard) => {

        return (


            <div className={`${data.margin} duration-150 hover:scale-[1.04] `} key={data.id}>
                <div className=" max-sm:max-w-[33%]">
                    <img className=" max-sm:p-[10px]" src={data.iconUrl} alt="" />
                </div>
                <div className=" px-[18px] py-[28px] max-sm:!py-0 " >
                    <div>
                        <h3 className="my-[1rem] text-[20px]">
                            {data.title}
                        </h3>
                    </div>
                    <section>
                        <p className=" text-[13px] max-sm:h-[4rem]">
                            {data.introduction}
                        </p>
                    </section>
                    <div className="flex my-[1.8rem]">
                        <h3 className=" text-[15px] cursor-pointer">
                            READ MORE
                        </h3>
                        <i className="before:content-[url(assets/Bigger.svg)]   before:flex  flex items-center ml-2"></i>
                    </div>
                </div>
            </div>

        )
    })

    return (
        <div className=" w-full flex">
            <div className=" bg-white mt-16">
                <section className=" p-[84px] max-[400px]:!px-[20px]">
                    <h3>CASE STUDIES</h3>
                    <h1 className=" text-[30px] my-[20px]">CASE STUDIES</h1>
                    <p className=" text-[14px]">
                        Listen below to what some of our clients have to say about how our services are driving value in their businesses. Find out more about the tailor-made services we've delivered, our bespoke approach to creating these and how they've helped drive success.
                    </p>
                    <div className="my-[25px]">
                        <button className=" text-[12px] hover:scale-[1.04] duration-150 border-black border-solid border-[1px] px-[14px] py-[5px]">VIEW  ALL CASE STUDIED</button>
                    </div>
                </section>
                <div className=" pb-[4rem]">
                    <div className="flex justify-evenly px-[15px] max-sm:flex-col">
                        {createCart}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CaseStudio;