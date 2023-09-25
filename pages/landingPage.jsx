import { App } from 'antd';
import NavigationBar from "../components/navbar";
import ProductsDropDown from '../components/dropDowns/products';

const page = () => {
    return (
        <>
            <App>
                <div>
                    <NavigationBar/>
                    
                </div>
            </App>        
        </>
    )
}
export default page;