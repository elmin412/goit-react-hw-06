import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice"
import style from "./SearchBox.module.css"


export default function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);
    
    return (
        <div className={style.searchBorder} >
            <p>Find contacts by name</p>

            <input 
                type="text"
                value={filter}
                onChange={(e) => { dispatch(changeFilter(e.target.value))
    }}
            />
        </div>
    );
}