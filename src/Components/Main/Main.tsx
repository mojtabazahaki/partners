
export interface PropsMain {

    children: React.ReactNode
}




const Main: React.FC<PropsMain> = ({ children }) => {

    return (
        <>
            {children}
        </>

    )




}


export default Main;