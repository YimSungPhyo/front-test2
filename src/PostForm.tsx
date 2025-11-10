import React, {useState} from 'react';
import type {NewPost} from './types';

// Props 타입 정의: 부모로부터 글 추가 함수를 받음
interface PostFormProps {
  onAddPost: (newPostData: NewPost) => void;
}

const PostForm: React.FC<PostFormProps> = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
    //제출 func
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // 1. 기본 폼 제출 동작(새로고침) 방지

        if (!title.trim() || !content.trim()) {
            alert('제목과 내용을 모두 입력해주세요.');
            return;
        }

        // 2. 입력된 데이터를 NewPost 타입 객체로 묶습니다.
        const newPostData: NewPost = {
            title,
            content,
        };

        // 3. props로 받은 부모 함수(onAddPost)를 호출하여 데이터 전달!
        onAddPost(newPostData);

        // 4. 폼 초기화
        setTitle('');
        setContent('');
    };



    //jsx
    return (
        <form >
            <input value={title} onChange={(e) => setTitle(e.target.value)} style={inputStyle}  placeholder="제목" />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="내용" />
        <button type="submit">등록</button>
        </form>
    );

};


// 간단한 인라인 스타일 정의 (Tailwind CSS가 없다는 가정 하에)
const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '1em',
};

const buttonStyle = {
  padding: '10px 15px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1em',
  fontWeight: 'bold',
};


export default PostForm;


/*

// src/PostForm.tsx (UI만 먼저)
import React, { useState } from 'react';
// ... PostFormProps 인터페이스 정의

const PostForm: React.FC<PostFormProps> = ({ onAddPost }) => { // onAddPost는 일단 무시하고 진행
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <form >
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="내용" />
      <button type="submit">등록</button>
    </form>
  );
};
export default PostForm;


*/