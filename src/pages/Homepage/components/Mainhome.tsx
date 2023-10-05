import CaseStudio from "./CaseStudio";
import Contact from "./Contact";
import Firstintroduction from "./Firstintroduction";
import Service from "./Service";
import Slider from "./Slide";



const Mainhome: React.FC = () => {

    return (

        <main className=" w-full flex justify-center" >
            <div className=" w-[1000px] max-lg:w-full">
                <Firstintroduction />
                <Service />
                <Slider />
                <CaseStudio />
                <Contact />
            </div>
        </main >

    )
}


export default Mainhome;