import FeatureElement from './featureElement';
import { FeatureList } from '../../strings';
import cn from 'classnames';
import style from './style.module.sass';

const FeaturesList = () =>{
    return(
        <div key={1} className={style.scrollableList}>
            {
                FeatureList.map((item, index) => {
                    return(
                        <>
                        <FeatureElement key={index} item={item} />
                        {index !== FeatureList.length - 1 && <div key={index} className={cn(style.spacerFeatureList)}/>}
                        </>
                        
                    )
                })
            }
        </div>
    )
}
export default FeaturesList;