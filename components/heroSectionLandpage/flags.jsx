import Image from 'next/image';
import ae from '../../images/svgs/icons/ae.svg';
import bd from '../../images/svgs/icons/bd.svg';
import lk from '../../images/svgs/icons/lk.svg';
import np from '../../images/svgs/icons/np.svg';
import pk from '../../images/svgs/icons/pk.svg';
import style from './styleSheet.module.sass';

const Flags = ()=>{
    return(
        <>
            <div className = {style.flagRowDiv} >
                <div>
                    <Image src = {pk} className = {style.flagImage}/>
                </div>
                <div style={{paddingLeft : ".75rem"}}/>
                <div>
                    <Image src = {ae} className = {style.flagImage}/>
                </div>
                <div style={{paddingLeft : ".75rem"}}/>
                <div>
                    <Image src = {bd} className = {style.flagImage}/>
                </div>
                <div style={{paddingLeft : ".75rem"}}/>
                <div>
                    <Image src = {lk} className = {style.flagImage}/>
                </div>
                <div style={{paddingLeft : ".75rem"}}/>
                <div>
                    <Image src = {np} className = {style.flagImage}/>
                </div>
            </div>

        </>
    );
}

export default Flags;