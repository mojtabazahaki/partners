import { useEffect, useState } from 'react';


const LoadHomePage: React.FC = () => {
    const [timer, setTimer] = useState<boolean>(false)

    useEffect(() => {


        const TimeStopLogo = setInterval(() => {

            setTimer(true)
            document.body.style.overflow = ' visible';

        }, 2500)



        return () => {
            clearInterval(TimeStopLogo)
            document.body.style.overflow = 'hidden'
            document.documentElement.scrollTop = 0
        }

    }, [])


    return (


        <>
            {
                !timer &&

                <div className='animate-[wiggle_2s_ease-out_0.7s_1_both]  flex justify-center items-center bg-[#F5F5F5]  fixed z-50 top-0 w-full h-screen'>
                    <img src="assets/Logostart.png" alt="" />
                </div>
            }
        </>
    )
}


export default LoadHomePage; 