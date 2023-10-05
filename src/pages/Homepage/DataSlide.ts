import { TypeCard } from "./components/Cart"


export interface SliderType {

    day: string,
    Issue: string,
    explanation: string,
    person: string,
    id: number

}


export interface TypeFooter {

    lable: string,
    list1: string,
    list2: string,
    list3: string,
    list4: string,
    list5: string,
    list6: string,
    list7: string,
    id: number
}



export const dataSlider: SliderType[] = [
    {
        day: '4days ago',
        explanation: 'I found my dealings with GC Partners very straightforward and stress free...',
        Issue: 'Currency exchange transact...',
        person: 'Mr Craig Galloway',
        id: 1


    },
    {
        day: '3days ago',
        explanation: 'Just did my first transaction with GC partners. Hayley was great!Will be...',
        Issue: 'Just did my first transactio...',
        person: 'Customer',
        id: 2


    },
    {
        day: '2days ago',
        explanation: 'difficult to navigate the procedure1. Call to get a ticket 2. arrange to send...',
        Issue: 'difficult to navigate the proc...',
        person: 'Peter Roth',
        id: 3


    },
    {
        day: '4days ago',
        explanation: 'Great, quick, secure service',
        Issue: 'Great',
        person: 'Billy',
        id: 4


    },

]


export const Datacart2: TypeCard[] = [

    {
        iconUrl: 'assets/image 7.png',
        margin: ' mt-0 max-sm:!mt-[1rem] max-sm:h-auto bg-[#F5F5F5] w-[30%]  h-[33rem] max-sm:w-full  rounded-[2px] max-sm:flex',
        title: 'PRS for MUSIC',
        introduction: 'Find out about how we help PRS for MUSIC to fulfil international royalties payments to its members worldwide.',
        id: 1

    },
    {
        iconUrl: 'assets/image 74.png',
        margin: "mt-[2rem] mt-0 max-sm:!mt-[1rem] max-sm:h-auto bg-[#F5F5F5] w-[30%]  h-[33rem] max-sm:w-full  rounded-[2px] max-sm:flex",
        title: 'Montreux Capital',
        introduction: ' Find out how we helped this Asset Management and Healthcare operator based in London to mitigate fluctuations in the...',
        id: 2

    },
    {
        iconUrl: 'assets/image 778.png',
        margin: " mt-[4rem] mt-0 max-sm:!mt-[1rem] max-sm:h-auto bg-[#F5F5F5] w-[30%]  h-[33rem] max-sm:w-full  rounded-[2px] max-sm:flex",
        title: 'Sarah Stirk',
        introduction: 'When Sky Sports Golf presenter, Sarah Stirk, decided to buy a second home in Portugal, she turned to GC Partners to make...',
        id: 3

    }
]



export const DataFooterList: TypeFooter[] = [
    {
        lable: 'Quick links',
        list1: 'Home',
        list2: 'Personal',
        list3: 'Business',
        list4: 'Partners',
        list5: 'Login',
        list6: 'Register',
        list7: '',
        id: 1
    },
    {
        lable: 'Company',
        list1: 'About',
        list2: 'Technology',
        list3: 'Case Studies',
        list4: 'Join the Team',
        list5: 'News & Insights',
        list6: 'FAQ’s',
        list7: 'Contact',
        id: 2
    },
    {
        lable: 'Offices',
        list1: 'London',
        list2: 'Hong Kong',
        list3: 'Dubai',
        list4: 'Vilamoura',
        list5: 'Alicante',
        list6: 'Almeria',
        list7: '',
        id: 3
    },
    {
        lable: 'Discover',
        list1: 'Security & Regulations',
        list2: 'Terms',
        list3: 'Privacy',
        list4: 'Cookies',
        list5: 'Currencies',
        list6: '',
        list7: '',
        id: 4
    },
]