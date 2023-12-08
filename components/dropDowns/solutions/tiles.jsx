import {Col, Row} from 'antd';

import Accounting from './assets/3.svg';
import DropDownTile from '../../dropDownTile/index';
import Ecommerce from '../../../images/svgs/icons/Ecommerce.svg';
import PL from '../../../images/svgs/icons/3pl.svg';
import Retail from '../../../images/svgs/icons/forRetail.svg';
import ServiceProviders from '../../../images/svgs/icons/serviceProvider.svg';
import {TilesSolution} from '../../../strings.jsx';
import Wholesalers from '../../../images/svgs/icons/wholesale.svg';
import cn from 'classnames';
import style from './style.module.sass';
import {useRouter} from 'next/router';

const Tiles = () => {
    const router = useRouter();

  const handleRetail = () => {
    router.push("/solutionPage/retail");
  };
  const handleEcommerce = () => {
    router.push("/solutionPage/ecommerce");
  };
  const handle3pl = () => {
    router.push("/solutionPage/3pl");
  };
  const handleAgencies = () => {
    router.push("/solutionPage/agencies");
  };
  const handleD2c = () => {
    router.push("/solutionPage/d2c");
  };


    return(
        <>
        <div className={cn(style.TilesContainer)}>
        <div className={cn(style.tilesRow)}>
                <DropDownTile handleClick={handleRetail} content={TilesSolution[0].content} title={TilesSolution[0].title} image={Accounting}/>
                <DropDownTile handleClick={handleEcommerce} content={TilesSolution[1].content} title={TilesSolution[1].title} image={Accounting}/>
            </div>
            <div className={cn(style.tilesRow)}>
                <DropDownTile handleClick={handle3pl} content={TilesSolution[2].content} title={TilesSolution[2].title} image={Accounting}/>
                <DropDownTile handleClick={handleAgencies} content={TilesSolution[3].content} title={TilesSolution[3].title} image={Accounting}/>
            </div>
            <div className={cn(style.tilesRow, style.lengthFifty)}>
                <DropDownTile handleClick={handleD2c} content={TilesSolution[4].content} title={TilesSolution[4].title} image={Accounting}/>
            </div>
        </div>
        </>
    )

}

export default Tiles;