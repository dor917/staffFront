import { React } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../js/sidebar.event.js';
import '../css/profile.css';
import axios from 'axios';


function prjList(props) {
    alert("sadasdaasdas");
    const result = [];

    axios({
        method: 'post',
        url: 'http://localhost:8080/getMbrProjectList.staff',
        params: {
            mbr_no: props.userInfo.mbr_no
        }
    })
    .then(function (response) {
        for (var a = 0; a < response.data.length; a++) {
            result.push(
                <div>
                    <div className='col-5'>
                        <div className='card h-100'>
                            <div className="card-body">
                                <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">{response.data[a].prj_nm}</i>
                                </h6>
                                <div className="progress mb-3" style={{ height: "5px" }}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="progress mb-3" style={{ height: "5px" }}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "66%" }} aria-valuenow="66"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="circle">
                                    <div className="text">java</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'></div>
                </div>
            );
            console.log({ result });
            return ({ result });
        }
        result.push(
            <div className='col-5'>
                <div className='card h-100'>
                    <button className="card-body">
                        <div className="fa-5x text-center font-size-custom">
                            <Link to="/Project">
                                <FontAwesomeIcon icon={faPlus} />
                            </Link>
                        </div>
                    </button>
                </div>
            </div>
        );
    })
    .catch(function (error) {
        console.log("error================>" + error);
    });

   
    alert("sadasdaasdas");

    return (
        <div>
            asdasdasasdas
            {result}
        </div>

    )


}

export default prjList;