import {Col, Row} from 'antd';

import Accounting from './assets/3.svg';
import DropDownTile from '../../dropDownTile/index';
import Ecommerce from '../../../images/svgs/icons/Ecommerce.svg';
import PL from '../../../images/svgs/icons/3pl.svg';
import Retail from '../../../images/svgs/icons/forRetail.svg';
import {TilesResources} from '../../../strings.jsx';
import Wholesalers from '../../../images/svgs/icons/wholesale.svg';
import cn from 'classnames';
import style from './style.module.sass';
import {useRouter} from 'next/router';

const Tiles = () => {
    const router = useRouter();

  const handleCareer = () => {
    router.push("/careerPage");
  };
  const handleContactUs = () => {
    router.push("/contactUsPage");
  };
  const handleArticles = () => {
    router.push("/articlePage");
  };
  const handleIntegration = () => {
    router.push("/integrationPage");
  };


    return(
        <>
        <div className={cn(style.TilesContainer)}>
            <div className={cn(style.tilesRow)}>
                <DropDownTile handleClick={handleCareer} content={TilesResources[0].content} title={TilesResources[0].title} image={Accounting}/>
                <DropDownTile handleClick={handleContactUs} content={TilesResources[1].content} title={TilesResources[1].title} image={Accounting}/>
            </div>
            <div className={cn(style.tilesRow)}>
                <DropDownTile handleClick={handleArticles} content={TilesResources[2].content} title={TilesResources[2].title} image={Accounting}/>
                <DropDownTile handleClick={handleIntegration} content={TilesResources[3].content} title={TilesResources[3].title} image={Accounting}/>
            </div>
        </div>
        </>
    )

}

export default Tiles;