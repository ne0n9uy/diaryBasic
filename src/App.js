import {useRef, useState} from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import "./App.css";

// const dummyList=[
//   {
//     id:1,
//     author:"삼삼이",
//     content:"하이1",
//     emotion:2,
//     created_date:new Date().getTime()  
//     //현재시각 기준 객체 생성 -> ms 단위로 반환
//   },  
//   {
//     id:3,
//     author:"짱구",
//     content:"하이2",
//     emotion:5,
//     created_date:new Date().getTime()  
//   },
  
//   {
//     id:4,
//     author:"철수",
//     content:"하이3",
//     emotion:3,
//     created_date:new Date().getTime()  
//   },
// ]


function App(){
  const [data, setData]=useState([]);

  const dataId=useRef(0);
  const onCreate=(author,content,emotion)=>{
    
    const created_date=new Date().getTime();

    const newItem={
      author,
      content,
      emotion,
      created_date,
      id:dataId.current //0 가리킴
    }
    dataId.current+=1;
    setData([newItem,...data]);
  }

  const onDelete=(targetId)=>{
    console.log(`${targetId}가 삭제되었습니다.`)
    const newDiaryList=data.filter((it)=>it.id!==targetId);
    console.log(newDiaryList);
    setData(newDiaryList);
  }
  
  return (
  <div className="App">
    <DiaryEditor onCreate={onCreate}/>
    <DiaryList onDelete={onDelete} diarylist={data}/>
  </div> 
  );
}
export default App;