import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = ({onChangeMethod, onEnterPressMethod}) => {
    return (
            <Form.Control   
            type="text" 
            placeholder="Search any movie" 
            id= "SearchBox"
            onChange={onChangeMethod}
            onKeyUp={onEnterPressMethod}
            />  
    );
}

export default SearchBar;
