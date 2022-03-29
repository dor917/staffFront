import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Pagination from './Pagination';
import moment from 'moment';
import '../css/Issue.css';
import { BsFillPencilFill } from "react-icons/bs";



const NoticeComponent = (props) => {

   const [posts, setPosts] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage] = useState(10);

   useEffect(() => {
      // const fetchPosts = async () => {
      //   let res = await ajax('/api/notice/noticeList');
      //   setPosts(res.data);
      //}

      //fetchPosts();
   }, []);

   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   return (
      <div className="container" style={{ fontFamily: 'Noto Sans Korean,Malgun Gothic,sans-serif' }}>
		 <div className="lf-menu-nav">
          <span>공지사항</span >
           <div className="lf-top-button">
           <a href="/noticewrite">
              <button className="lf-button-primary-float-right"><BsFillPencilFill/>
                 </button>
                 </a>
           </div>
       </div>
         <div className="lf-contents pd12">
            <div style={{ padding: "0 12px" }}>
               <table className="board_list text-center">
                  <colgroup>
                     <col width="10%" />
                     <col width="10%" />
                     <col width="10%" />
                     <col width="10%" />
                     <col width="10%" />
                     <col width="10%" />
                     <col width="10%" />
                  </colgroup>
                  <thead>
                     <tr>
                        <th>번호</th>
                        <th>구분</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일시</th>
                        <th>조회수</th>
                        <th>첨부</th>
                     </tr>
                  </thead>
                  <tbody>
                     {currentPosts.map(post => (
                        <tr key={post._id}>
                           <td>{post._id}</td>
                           <td>{post.type}</td>
                           <td className="text-left"><Link className="text-ellipsis" to={{ pathname: '/noticeDetail', state: { _id: post._id } }} style={{ color: '#909090' }}>{post.title}</Link></td>
                           <td>{post.userName}</td>
                           <td>{moment(post.date).format('YYYY-MM-DD')}</td>
                           <td>{post.readCount}</td>
                           <td>
                              {post.fileList.length > 0 &&
                                 <img src="/images/board_attach.gif" />
                              }
                           </td>
                        </tr>
                     ))}
                  </tbody>

               </table>
            </div>

            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} currentPage={currentPage} paginate={paginate}></Pagination>
         </div>
      </div>
   )
};


export default NoticeComponent;