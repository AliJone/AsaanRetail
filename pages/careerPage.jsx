import { App } from "antd";
import NavigationBar from "../components/Navbar";

const page = () =>{
    return(
        <>
        <App>
            <div style={{
                overflowX: "hidden",
                
            }}>
                <NavigationBar/>
                
            </div>
        </App>
        </>
    )
}

export default page;