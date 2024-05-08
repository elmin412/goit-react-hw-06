import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, setStatusFilter } from "../../redux/filtersSlice"
import style from "./SearchBox.module.css"


export default function SearchBox() {
    const dispatch = useDispatch();

    const filter = useSelector(selectNameFilter);


    const handleInput = (e) => {
        dispatch(setStatusFilter(e.target.value))
    }
    return (
        <div className={style.searchBorder} >
            <p>Find contacts by name</p>

            <input 
                type="text"
                value={filter}
                onChange={handleInput}
            />
        </div>
    );
}