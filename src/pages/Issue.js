/*import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select'

const option=[
    {value: 'newest', label: 'newest'},
    {value: 'oldest', label: 'oldest'}
]
const [inputData, setInputData] = useState([{
    idx:'',
    title:'',
    date:'',
    content:'',
    writer:''
}])
// 글 리스트 갯수를 세기 위해 선언, 기본값 0
const [lasstIdx, setLastIdx]= useState(0)

function Issue(){
useEffect(async() =>{
    try{
        //데이터를 받아오는 동안 시간이 소요됨으로 await로 대기
        const res = await axios.get('api/Issue') 
        const _inputData = await res.data.map((rowData)=> (
            setLastIdx(lastIdx+1),
            {
            idx: rowData.idx,
            title: rowData.title,
            date: rowData.date,
            content: rowData.content,
            writer: rowData.writer 
        })
        )
        //선언된 _inputData를 최초 선언한 inputData에 concat으로 추가
        setInputData(inputData.concat(_inputData))
    }catch(e){
        console.error(e.messege)
    }
{}})

        return(
            <div className="Issue-body-back">
                <div className="Issue-body-top">
                    <div className="Issue-table-list-filter">
                        <details className="details-btn-link" open>
                            <summary className="summary-btn-link"title="Sort" role="button">
                            <Select name="options"onchange={issueChangedSelect} value={'2'}>
                                <option value="newest">최신순</option>
                                <option value="oldest">오래된순</option>
                            </Select>
                            </summary>
                        </details>
                    </div>
                    <div className="Issue-body-bottom">
                        <table>
                            <div className="bottom-table">
                                <div className=""></div>
                            </div>
                        </table>
                    </div>

                </div>

            </div>
        );
}
*/