import { App } from "antd";
import NavigationBar from "../components/Navbar";
import ApplicationFormFeilds from "../components/ApplicationFormFeilds/ApplicationFormFeilds";

const page = () =>{
    return(
        <>
        <App>
            <div style={{
                overflowX: "hidden",
                
            }}>
                <NavigationBar/>
                <ApplicationFormFeilds/>
            </div>
        </App>
        </>
    )
}

export default page;