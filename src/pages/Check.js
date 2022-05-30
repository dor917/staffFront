import React, { useState } from "react";

const Check = () => {
    const formData = [
    { id : 1, language: "Java"},
    { id : 2, language: "Python"},
    { id : 3, language: "C#"},
    { id : 4, language: "C++"},
    { id : 5, language: "C"},
    { id : 6, language: "Node.js"},
    { id : 7, language: "TypeScript"},
    { id : 8, language: "Ruby"},
    { id : 9, language: "Swift"},
    ];

    const [isChecked, setIsChecked] = useState(false);
    const [checkedItems, setCheckedItems] = useState(new Set());

    const checkHandler = ({ target }) => {
        setIsChecked(!isChecked);
        checkeditemHandler(target.parentNode, target.value, target.checked);
    };

    const checkeditemHandler = (box, id, isChecked) => {
        if (isChecked) {
            checkedItems.add(id);
            setCheckedItems(checkedItems);
            box.style.backgroundColor = "#F6CB44";
        }
        else if (!isChecked && checkedItems.has(id)){
        checkedItems.delete(id);
        setCheckedItems(checkedItems);
        box.style.backgroundColor = "#fff";
        }
    return checkedItems;
    };

    return(
        <div className="contStyle">
            {formData.map((item) => (
                <label key = {item.id} className = "innerBox">
                    <input
                    type="checkbox"
                    className="checkbox-size"
                    value={item.language}
                    onChange={(e) => checkHandler(e)}
                />
                <div className="ml-10">{item.language}</div>
                </label>
            ))}
            </div>
    );
};
    // const [checkedItems, setCheckedItems] = useState(new Set());

    // const onHandleCheckedItems = (id, isChecked) => {
    //     if (isChecked) {
    //         checkedItems.add(id);
    //         setCheckedItems(checkedItems);
    //     }
    //     else if (!isChecked && checkedItems.has(id)) {
    //         checkedItems.delete(id);
    //         setCheckedItems(checkedItems);
    //     }
    //     console.log('checkedItems', checkedItems)
    // };

    // return (
    //     <ul className='flex flex-col gap-2 mt-4'>

    //     </ul>
    // )
    // const InputBox = ({row, onHandleCheckedItems }) => {
    //     const [bChecked, setChecked] = useState(false);

    //     const checkHandler = ({ target }) => {
    //         setChecked(!bChecked);
    //         onHandleCheckedItems(row.id, target.checked);
    //     };
        
    //     return(
            
    //         <input type="checkbox" checked={bChecked} onChange={(e) => checkHandler(e)}
            
    //     );
    // };

export default Check;