import style from './style.module.sass';

const GradientLine = ({width})=>{
    return (
        <>
            <div className = {style.barColor} style={{width: width}}/>
        </>
    )
}
export default GradientLine;