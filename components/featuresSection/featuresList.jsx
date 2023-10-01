import FeatureElement from './featureElement';
import { FeatureList } from '../../strings';
import style from './style.module.sass';

const FeaturesList = () =>{
    return(
        <div key={1} className={style.scrollableList}>
            {
                FeatureList.map((item, index) => {
                    return(
                        <>
                        <FeatureElement key={index} title={item.title} list={item.list} icon={item.icon} />
                        {index !== FeatureList.length - 1 && <div key={index} style={{paddingTop:"60px"}}/>}
                        </>
                        
                    )
                })
            }
        </div>
    )
}
export default FeaturesList;