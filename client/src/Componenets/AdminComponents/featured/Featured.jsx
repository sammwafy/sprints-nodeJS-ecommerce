import "./featured.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import CircularStatic from './CircularProgressWithLabel'
import UpdownInput from "../UpdownInput";
import { CircularProgressWithLabel } from './CircularProgressWithLabel'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <span className="tag">Total revenue</span>
                <MoreVertOutlinedIcon className="icon" />
            </div>
            <div className="bottom">
                <div className="featured-chart" style={{ width: "150px", height: "150px", padding: "10px" }}>
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={2} />
                </div>
                <span className="tag">Total Sales Today</span>
                <span className="counter">$15000</span>
                <div className="results">
                    <div className="result">
                        Target
                        <UpdownInput input="$12.4k" sign="positive" />
                    </div>
                    <div className="result">
                        Last Week
                        <UpdownInput input="$12.4k" sign={null} />
                    </div>
                    <div className="result">
                        Last Month
                        <UpdownInput input="$12.4k" sign="positive" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured