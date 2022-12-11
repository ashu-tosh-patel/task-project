import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Filter = ({ item }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <span className="d">
            {item}
            <BsThreeDotsVertical onClick={() => setToggle(!toggle)} />
            {toggle && (
                <div className="filter_options">
                    <p onClick={() => window.location.reload()}>unsort</p>
                    <p onClick={() => window.location.reload()}>sort in ASC</p>
                    <p onClick={() => window.location.reload()}>sort in DESC</p>
                </div>
            )}
        </span>
    );
};

export default Filter;
