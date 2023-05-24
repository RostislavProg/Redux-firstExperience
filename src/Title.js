
import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./redux/actions";

function Title(props) { 
    const text = useSelector(state => {
        const { inputReducer } = state;
        return inputReducer.text;
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(inputText(e.target.value))
    } 

    return (
        <div className="card-title">
            <p>{text}</p>
            <div className="card-title-top">
                <input style={{color: 'gray'}} type='text' onChange={handleChange}/>
            </div>
        </div>
    )
}

export default Title;