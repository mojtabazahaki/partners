import React, { Dispatch } from 'react'


interface Props {

    setUnder: Dispatch<React.SetStateAction<boolean>>
    underList: boolean
}


export interface Listtype {

    title: string,
    id: number

}

const UnderlistMore: React.FC<Props> = ({ setUnder, underList }) => {



    const TitleList: Listtype[] = [
        {
            id: 1,
            title: 'Below the list'

        },
        {
            id: 2,
            title: 'Below the list'

        },
        {
            id: 3,
            title: 'Below the list'

        },
        {
            id: 4,
            title: 'Below the list'

        },
    ]

    const handelUnderlist: React.MouseEventHandler<HTMLLIElement> = (): void => {

        setUnder(!underList)
    }

    return (
        <div className=" w-[32rem] max-md:hidden">
            <ul className="flex justify-around max-lg:justify-evenly text-[14px]">
                <li className=" text-[#C0A615]  cursor-pointer">HOME</li>
                <li className=' hover:text-[#a2a09e] cursor-pointer'>PERSONAL</li>
                <li className=' hover:text-[#a2a09e] cursor-pointer'>BUSINEES</li>
                <li className=' hover:text-[#a2a09e] cursor-pointer'>PARTNERS</li>
                <li className=' hover:text-[#a2a09e] cursor-pointer'>CONTACT</li>
                <li className="flex  items-center relative cursor-pointer " onClick={handelUnderlist}>
                    <h3 className='hover:text-[#a2a09e] cursor-pointer'>MORE</h3>
                    <i className=" before:content-[url(assets/Down.svg)] before:items-center before:flex ml-[5px]"></i>
                    <ul className={` ${underList ? ' block duration-700 ' : 'hidden'}  absolute animate-[transformUnderList_.5s_ease-out_0s_1_both]  rounded-[3px]   w-[10rem] bg-[#F5F5F5] shadow-[0px_2px_4px_1px_#dedede]`}>
                        {
                            TitleList.map((list: Listtype) => {

                                return (
                                    <li key={list.id} className=" p-[10px]  my-2 duration-200  hover:bg-[#ced2d6]">{list.title}</li>
                                )
                            })
                        }

                    </ul>
                </li>

            </ul>

        </div>
    )
}



export default UnderlistMore;