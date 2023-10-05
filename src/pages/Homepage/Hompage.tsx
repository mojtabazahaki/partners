import Layout from "../../Layout/Layout";
import LoadHomePage from "./components/Loadhomepage";
import Mainhome from "./components/Mainhome";


const Hompage: React.FC = () => {


    return (

        <Layout>

            <LoadHomePage />
            <Mainhome />

        </Layout>





    )
}


export default Hompage;