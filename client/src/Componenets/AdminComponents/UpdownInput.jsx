import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./updowninput.scss"
const UpdownInput = ({ input, sign }) => {
    const style = sign ? { color: "green" } : { color: "red" }
    return (
        <div className="percentage" style={style}>
            {sign ? <KeyboardArrowUpIcon style={style} /> : <KeyboardArrowDownIcon style={style} />}
            {input}
        </div>
    )
}

export default UpdownInput