import { Dispatch } from 'react'


interface Typetitle {

    title: string,
    class1: string,
    id: number
}

interface Props {

    setUnder: Dispatch<React.SetStateAction<boolean>>
    underList: boolean
}


const ListNavLink: React.FC<Props> = ({ setUnder, underList }) => {


    const TitleList: Typetitle[] = [
        {
            id: 1,
            title: 'Below the list',
            class1: 'max-md:animate-[ListFooter_1s_ease-out_0.1s_1_both]'

        },
        {
            id: 2,
            title: 'Below the list',
            class1: 'max-md:animate-[ListFooter_1s_ease-out_0.2s_1_both]'

        },
        {
            id: 3,
            title: 'Below the list',
            class1: 'max-md:animate-[ListFooter_1s_ease-out_0.3s_1_both]'
        },
        {
            id: 4,
            title: 'Below the list',
            class1: 'max-md:animate-[ListFooter_1s_ease-out_0.4s_1_both]'
        },
    ]

    const handelUnderlist: React.MouseEventHandler<HTMLLIElement> = (): void => {

        setUnder(!underList)
    }

    return (
        <div className="  max-md:!flex hidden ">
            <ul className="flex  flex-col-reverse max-lg:justify-evenly text-[14px] w-full  max-lg:px-[10px]">
                <li className=" max-md:text-start flex items-center    text-white duration-150 max-md:px-[2rem] max-md:border-0 max-md:hover:bg-[#444238] max-md:h-10  cursor-pointer">HOME</li>
                <li className=' max-md:h-10  max-md:text-start text-white flex items-center duration-150 max-md:px-[2rem]  max-md:hover:bg-[#444238] cursor-pointer'>PERSONAL</li>
                <li className=' max-md:h-10 cursor-pointer text-white max-md:text-start flex duration-150 items-center max-md:px-[2rem]  max-md:hover:bg-[#444238]'>BUSINEES</li>
                <li className=' max-md:h-10   text-white cursor-pointer max-md:text-start flex duration-150 items-center max-md:px-[2rem]  max-md:hover:bg-[#444238]'>PARTNERS</li>
                <li className=' text-white max-md:h-10  cursor-pointer max-md:text-start duration-150 flex items-center max-md:px-[2rem]  max-md:hover:bg-[#444238]'>CONTACT</li>
                <li className=" items-center relative cursor-pointer " onClick={handelUnderlist}>
                    <div className="max-md:h-10 w-full flex max-md:text-start duration-150  justify-between items-center max-md:px-[2rem]  max-md:hover:bg-[#444238]">
                        <h3 className=' text-white cursor-pointer '>MORE</h3>
                        <i className=" rotate-90  before:content-[url(assets/Biggerrespo.svg)] before:items-center before:flex ml-[5px]"></i>
                    </div>
                    <ul className={` ${underList ? ' block duration-700 max-lg:px-[50px] ' : 'hidden'}      w-full  `}>
                        {
                            TitleList.map((list: Typetitle) => {

                                return (
                                    <li key={list.id} className={`${underList && list.class1} p-[10px]  my-2 duration-200  hover:bg-[#ced2d6] text-white`}>{list.title}</li>
                                )
                            })
                        }

                    </ul>
                </li>

            </ul>

        </div>
    )
}


export default ListNavLink;