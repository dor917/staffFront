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
                    value={item.name}
                    onChange={(e) => checkHandler(e)}
                />
                <div>{item.name}</div>
                </label>
            ))}
            </div>
    );
};
    

export default Check;