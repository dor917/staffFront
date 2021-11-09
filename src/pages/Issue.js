import { useState, useEffect } from 'react';
import '../css/Issue.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Axios from 'axios';

function Issues() {
  const [issueContent, setissueContent] = useState({
    title: '',
    content: ''
  })

  const [viewContent, setViewContent] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:8000/api/get').then((response)=>{
      setViewContent(response.data);
    })
  },[viewContent])

  const submitReview = ()=>{
    Axios.post('http://localhost:8000/api/insert', {
      title: issueContent.title,
      content: issueContent.content
    }).then(()=>{
      alert('등록 완료!');
    })
  };

  const getValue1 = e => {
    const { name, value } = e.target;
    setissueContent({
      ...issueContent,
      [name]: value
    })
  };


  return (
    <div className="Issues">
      <h1 className="">Issue page</h1>
      <div className='issue-container'>
        {viewContent.map(element =>
          <div style={{ border: '1px solid #333' }}>
            <h2>{element.title}</h2>
          </div>
        )}
      </div>
      <div className='form-wrapper'>
        <input className="title-input"
          type='text'
          placeholder='제목'
          onChange={getValue1}
          name='title'
        />
        <CKEditor
          editor={ClassicEditor}
          data="<p>입력해주세요</p>"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setissueContent({
              ...issueContent,
              content: data
            })
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
        <button className="issue-button"
        className="submit-button"
        onClick={submitReview}
        >입력</button>
      </div>
    </div>
  );
}

export default Issues;