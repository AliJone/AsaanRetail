import style from './style.module.sass';

const GradientLine = ({width, float, height})=>{
    return (
        <>
            <div className = {style.barColor} style={{width: width, float:float, height: height}}/>
        </>
    )
}
export default GradientLine;