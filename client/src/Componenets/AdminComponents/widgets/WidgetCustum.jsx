import "./widgets.scss"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
const WidgetCustum = ({ title, value, icon, type }) => {


    return (
        <div className="widget">
            <div className="left">
                <span className="title">{title}</span>
                <div className="bottom">
                    <span className="counter">{value}<span className="unit">{value > 1 ? type : type.slice(0, -1)}</span></span>
                    {icon}
                </div>
            </div>
        </div>
    )
}

export default WidgetCustum