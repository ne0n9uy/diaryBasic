import { useRef, useState } from "react";
import "./App.css" 

const DiaryEditor=({onCreate})=>{
    const authorInput=useRef(); 
    //반환값 변수에 담기+객체 내 ref를 통해 DOM에 접근하도록
    const contentsInput=useRef();

    const [state,setState]=useState({
        author:"",
        content: "",
        emotion: 1,
});
    const handleChangeState=(e)=>{
        console.log(e.target.name);
        console.log(e.target.value);
        setState({
            ...state,
            [e.target.name]:e.target.value
            //변경 시 값 입력되는 코드
            //author, emotion 등에 value 값 들어감
        });
    }
    const handleSubmit=()=>{
        if(state.author.length<1){
            //focus
            authorInput.current.focus();
            //useRef는 현재 가리키는 값을 current 프로퍼티 통해 불러와서 사용 => focus 통해 포커스 효과
            return; //더 이상 진행 안 되도록 함
        }
        if(state.content.length<5){
            //focus
            contentsInput.current.focus();
            return;
        }
        onCreate(state.author,state.content,state.emotion);
        alert("Saved!");
        setState({
            author:"",
            content:"",
            emotion:1
        })
    }

    return (
    <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input ref={authorInput} name="author" value={state.author} onChange={handleChangeState} />  
            {/* onChange 통해 콜백 함수 전달 : e 받아와서 콘솔에 띄우기*/}            
        </div>

        <div>
            <textarea ref={contentsInput} name="content" value={state.content} onChange={handleChangeState} />
        </div>

        <div>
            <select name="emotion" value={state.emotion}
            onChange={handleChangeState}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>

        <div>
            <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
    </div>
);
};
export default DiaryEditor;