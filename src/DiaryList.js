import DiaryItem from "./DiaryItem";

const DiaryList=({onEdit,onRemove,diarylist})=>{
    return (
    <div className="DiaryList">
        <h2>일기 리스트</h2>
        <h4>{diarylist.length}개의 일기가 있습니다.</h4>
        
        <div>
            {diarylist.map((it)=>(
                //diaryList 내 요소 it로 바꿈
                // ==3개(아이템 개수)의 아이템 렌더링
                <div key={it.id}>
                    {/* == diaryList.map(it,idx) + key={idx} */}
                    <DiaryItem key={it.id} {...it} onRemove={onRemove}/>
                </div>
                ))}
        </div>
    </div>
    );
};
DiaryList.defaultProps={
    //defaultProps=undefined으로 정의된 것들의 기본값 설정
    diaryList:[] //빈 배열로 설정
}
export default DiaryList;