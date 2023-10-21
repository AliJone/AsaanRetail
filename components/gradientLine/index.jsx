import style from './style.module.sass';

const GradientLine = ({width, float})=>{
    return (
        <>
            <div className = {style.barColor} style={{width: width, float:float}}/>
        </>
    )
}
export default GradientLine;