import data from "../data/csvjson.json";
import Filter from "./Filter";

const Table = () => {
    const arr = [];

    const convertCol = () => {
        const object = data[0];
        console.log(data[0]);
        Object.keys(object).forEach(function (key) {
            if (
                !(
                    key === "id" ||
                    key === "show" ||
                    key === "status" ||
                    key === "edit"
                )
            ) {
                arr.push(key);
            }
        });
    };
    convertCol();

    return (
        <table>
            <thead>
                {arr.length > 0 &&
                    arr.map((item, index) => {
                        return (
                            <th key={index} className="theader">
                                <Filter item={item} />
                            </th>
                        );
                    })}
            </thead>
            <tbody>
                {data.map((item, index) => {
                    const obj = item;
                    let temp = [];
                    Object.keys(obj).forEach(function (key, index) {
                        if (key === "status") {
                            if (key === true) temp.push(true);
                        }
                        if (
                            !(
                                key === "id" ||
                                key === "show" ||
                                key === "status" ||
                                key === "edit"
                            )
                        ) {
                            temp.push(obj[key]);
                        }
                    });
                    return (
                        <tr>
                            {temp.length > 0 &&
                                temp.map((item, index) => {
                                    return (
                                        <td id="id" key={index}>
                                            {item}
                                        </td>
                                    );
                                })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
