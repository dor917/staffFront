import React, { useState } from "react";
import $ from 'jquery';

const Check = () => {
    const formData = [
    { id : 1, language: "Node.js"},
    { id : 2, language: "Java"},
    { id : 3, language: "C#"},
    { id : 4, language: "C++"},
    { id : 5, language: "C"},
    { id : 6, language: "Python"},
    { id : 7, language: "TypeScript"},
    { id : 8, language: "Ruby"},
    { id : 9, language: "Swift"},
    ];

    // var prj_lan_nm = []
    // var lan_nm = $('.Save_prj_lan_nm')
    // for(var i=0; i < lan_nm.length; i ++) {
    //     if(lan_nm[i].checked) {
    //         prj_lan_nm.push(lan_nm[i].value)
    //     }
     
    // }
    
    // console.log(prj_lan_nm)

    var select_lang_list = []
    var check_list = $('.Save_prj_lan_nm')
    for(var i=0; i < check_list.length; i ++) {
        if(check_list[i].checked) {
            select_lang_list.push(check_list[i].value)
        }
    }
    
    console.log(select_lang_list)
    
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
            box.style.backgroundColor = "";
        }
        else if (!isChecked && checkedItems.has(id)){
        checkedItems.delete(id);
        setCheckedItems(checkedItems);
        box.style.backgroundColor = "";
        }
    return checkedItems;
    };

    return(
        <div className="contStyle">
            {/* <form id='CheckForm' method='post'>
                <input type="hidden" name='lan_nm'/>
            </form> */}
            {formData.map((item) => (
                <label key = {item.id} className = "innerBox">
                    <input
                    type="checkbox"
                    name="lan_nm"
                    className="Save_prj_lan_nm"
                    value={item.language}
                    onChange={(e) => checkHandler(e)}
                />
                <div className="ml-10">{item.language}</div>
                </label>
            ))}
        </div>
    );
};
export default Check;