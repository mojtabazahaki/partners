import { DataFooterList, TypeFooter } from "../DataSlide";
import { useState } from 'react'


const Listfooter: React.FC = () => {

    const [Listnumber, setListnumber] = useState<number[]>([])


    const HandelFooterList = (id: number): void => {

        Listnumber.includes(id) ? setListnumber([]) : setListnumber([id]);
    }



    return (
        <div className=" w-full ml-[5rem] max-lg:m-0">
            <div>
                <ul className="flex   justify-evenly max-sm:flex-col">
                    {DataFooterList.map((list: TypeFooter) => {

                        return (
                            <li key={list.id} className={`${Listnumber.includes(list.id) && '  max-sm:h-auto'}  max-sm:overflow-hidden max-sm:h-[3rem]`}>
                                <div className="max-sm:px-[10px]" onClick={() => HandelFooterList(list.id)}>
                                    <div className="max-sm:px-4 max-sm:flex max-sm:justify-between duration-150  max-sm:cursor-pointer max-sm:hover:bg-[#fa900026] max-sm:rounded-[2px]">
                                        <h1 className=" text-[#CAA675] text-[15px] max-sm:h-12 max-sm:flex  max-sm:items-center">{list.lable}</h1>
                                        <i className=" max-sm:after:content-[url(assets/Downfooter.svg)]   max-sm:flex max-sm:items-center"></i>
                                    </div>
                                </div>
                                <ul className={`max-sm:px-[40px]`}>
                                    <li className={`${Listnumber.includes(list.id) && ' max-sm:animate-[ListFooter_1s_ease-out_0.1s_1_both]'} max-sm:h-[3rem] max-sm:flex max-sm:items-center  max-sm:hover:bg-[#fa900026] max-sm:px-[10px] max-sm:rounded-[2px] duration-150 cursor-pointer text-[14px] text-white mt-[15px]`}>{list.list1}</li>
                                    <li className={` ${Listnumber.includes(list.id) && 'max-sm:animate-[ListFooter_1s_ease-out_0.2s_1_both] '} max-sm:h-[3rem] max-sm:flex max-sm:items-center  max-sm:hover:bg-[#fa900026] max-sm:px-[10px] max-sm:rounded-[2px] duration-150 cursor-pointer text-[14px] text-white mt-[15px]`}>{list.list2}</li>
                                    <li className={` ${Listnumber.includes(list.id) && 'max-sm:animate-[ListFooter_1s_ease-out_0.3s_1_both] '} max-sm:h-[3rem] max-sm:flex max-sm:items-center  max-sm:hover:bg-[#fa900026] max-sm:px-[10px] max-sm:rounded-[2px] duration-150 cursor-pointer text-[14px] text-white mt-[15px]`}>{list.list3}</li>
                                    <li className={` ${Listnumber.includes(list.id) && 'max-sm:animate-[ListFooter_1s_ease-out_0.4s_1_both] '} max-sm:h-[3rem] max-sm:flex max-sm:items-center  max-sm:hover:bg-[#fa900026] max-sm:px-[10px] max-sm:rounded-[2px] duration-150 cursor-pointer text-[14px] text-white mt-[15px]`}>{list.list4}</li>
                                    <li className={` ${Listnumber.includes(list.id) && 'max-sm:animate-[ListFooter_1s_ease-out_0.5s_1_both] '} max-sm:h-[3rem] max-sm:flex max-sm:items-center  max-sm:hover:bg-[#fa900026] max-sm:px-[10px] max-sm:rounded-[2px] duration-150 cursor-pointer text-[14px] text-white mt-[15px]`}>{list.list5}</li>
                                    {list.id >= 1 && list.id <= 3 ?
                                        <li className={` ${Listnumber.includes(list.id) && 'max-sm:animate-[ListFooter_1s_ease-out_0.6s_1_both] '} max-sm:h-[3rem] max-sm:flex max-sm:items-center  max-sm:hover:bg-[#fa900026] max-sm:px-[10px] max-sm:rounded-[2px] duration-150 cursor-pointer text-[14px] text-white mt-[15px]`} >{list.list6}</li>
                                        :
                                        null}
                                    {list.id === 2 && <li className={` ${Listnumber.includes(list.id) && 'max-sm:animate-[ListFooter_1s_ease-out_0.7s_1_both] '} max-sm:h-[3rem] max-sm:flex max-sm:items-center  max-sm:hover:bg-[#fa900026] max-sm:px-[10px] max-sm:rounded-[2px] duration-150 cursor-pointer text-[14px] text-white mt-[15px]`}>{list.list7}</li>}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}



export default Listfooter;