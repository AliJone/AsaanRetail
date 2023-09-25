import { Icon } from 'antd';
import Image from 'next/image';
import classNames from 'classnames';
import style from './style.module.sass';

const ImageWithBGGradient = ({ image}) => {

    const imageWithBGGradientClass = classNames(style.gradient);

    return (
        <div className={imageWithBGGradientClass}>
            <Image src={image} style = {{borderRadius : "10px"}}/>
        </div>
    );
}

export default ImageWithBGGradient;