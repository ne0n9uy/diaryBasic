import { useState,useRef } from "react";

const DiaryItem=({onEdit,onRemove,author,content,created_date,emotion,id})=>{

    const [isEdit, setIsEdit]= useState(false); 
    //isEdit: boolean 값 보관
    const toggleIsEdit=()=>{
        //호출시 isEdit의 값 반전
        setIsEdit(!isEdit);
        console.log(isEdit);
    }
    const [localContent,setLocalContent]=useState(content); 
    //수정데이터 핸들링 역할

    const localContentInput=useRef();

    const handleRemove=()=>{
        console.log(id);
        if(window.confirm( `${id}번째 일기를 정말 삭제하시겠습니까?`)){onRemove(id);}
    }

    const handleQuitEdit=()=>{
        setIsEdit(false);
        setLocalContent(content);
    }

    const handleEdit=()=>{
        if (localContent.length<5){
            localContentInput.current.focus();            
        }
        onEdit(id,localContent);
    }
    if(window.confirm(`${id}번째 일기를 수정하시겠습니까?`)){
        onEdit(id,localContent);
        toggleIsEdit();    
    }

    return (
        <div className="DiaryItem">
            <div className="info">
                <span>작성자:{author} 감정점수: {emotion}</span>
                <br/>
                <span className="date">{new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="content">
                {isEdit? (
                <>
                    <textarea value={localContent} ref={localContentInput} onChange={(e)=>{setLocalContent(e.target.value)}}/>
                </>) :(<>{content}</>)
                }
            </div>
            {isEdit?
            <>
                <button onClick={handleQuitEdit}>수정 취소</button>
                <button onClick={handleEdit}>수정 완료</button>
            </> : (<>
                <button onClick={handleRemove}>삭제하기</button>
                <button onClick={toggleIsEdit}>수정하기</button>
            </>)
            
            }
        </div>
        );
    };

export default DiaryItem;