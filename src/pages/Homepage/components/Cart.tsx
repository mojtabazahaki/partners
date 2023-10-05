interface Props {

    scrool: boolean;
}

export interface TypeCard {

    margin: string,
    iconUrl: string,
    title: string,
    introduction: string,
    id: number


}



const Cart: React.FC<Props> = ({ scrool }) => {




    const DataCart: TypeCard[] = [{

        iconUrl: "assets/Users.png",
        introduction: 'Whether you’re an individual looking to purchase a property overseas or send salary or pension payments, we can help. It doesn’t matter how large or small the payments are.',
        margin: 'mt-0',
        title: 'PERSONAL',
        id: 1
    },
    {

        iconUrl: "assets/chart.png",
        introduction: 'It doesn’t matter what industry you’re in or its type, sector or size. We provide a range of tailored financial solutions from FX & international payments, mass payments, hedging, global currency accounts and more.',
        margin: 'mt-8',
        title: 'BUSINESS',
        id: 2
    },
    {

        iconUrl: "assets/Users.png",
        introduction: 'We offer great partnership opportunities for white label FX and payments providers. Alternatively, take part in our referral scheme. Click here to find out more.',
        margin: 'mt-16',
        title: 'PARTNERSHIPS',
        id: 3
    }]



    return (
        <div className=" max-lg:mt-[4rem]">
            <div className="flex justify-around  max-sm:flex-col">
                {
                    DataCart.map((data: TypeCard) => {

                        return (
                            <div key={data.id} className={`  ${scrool && ' animate-[Cart_1s_ease-out_0s_1_both]'} ${data.margin} !duration-150 hover:!scale-[1.04] max-sm:w-full max-sm:mt-8  max-sm:flex max-lg:h-[10rem] h-[24rem]  bg-[#F5F5F5] w-[29%] p-[27px] rounded-[2px]`} >
                                <div className=" max-sm:w-[3.5rem]">
                                    <div className=" p-[10px] h-12 border-[#c5c4c2]  w-12 border-solid border-[1px] rounded-[32px] flex  justify-center items-center ">
                                        {/* <i className={` before:content-[url(${data.iconUrl})] before:flex`}></i> */}
                                        <img src={data.iconUrl} alt="" />
                                    </div>

                                    <div>
                                        <h3 className="my-[1rem] max-sm:text-[13px]">
                                            {data.title}
                                        </h3>
                                    </div>
                                </div>
                                <div className=" max-[430px]:hidden max-lg:hidden max-sm:py-[10px] max-sm:flex max-sm:items-center max-sm:pl-[45px] ">
                                    <p className=" text-[15px]  max-sm:text-[13px]">
                                        {data.introduction}
                                    </p>
                                </div>
                                <div className="flex my-[1.8rem] max-lg:hidden">
                                    <h3 className=" cursor-pointer text-[15px]">
                                        READ MORE
                                    </h3>
                                    <i className="before:content-[url(assets/Bigger.svg)]   before:flex  flex items-center ml-2"></i>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Cart;