import './App.css';

/*
 * 반복적인 게 나온다 => map
 * 코드가 더럽게 길다 => 컴포넌트

  * @map : 이해해가세요
  * @컴포넌트
  * @프롭스
*/


function App() {

  let fruit = [
    {name : "apple", fru : '🍎'},
    {name : "cherry", fru : '🍒'},
    {name : "strawberry", fru : '🍓'},
    {name : "melon", fru : '🍈'},
    {name : "peach", fru : '🍑'},
    {name : "banana", fru : '🍌'},
    {name : "watermelon", fru : '🍉'},
    {name : "lemon", fru : '🍋'},
    {name : "grape", fru : '🍇'},
    {name : "tomato", fru : '🍅'},
    {name : "pinapple", fru : '🍍'},
    {name : "orange", fru : '🍊'},
  ]

  return (
    <div>
      <div className='number'>
          <span>{fruit.length} Pariticipants</span>
        </div>
      
      <div className='fruit'>
        {fruit.map((item)=> 
          <Box name={item.name} fru={item.fru}/>
        )}
      </div>
    </div>
  );
}

export default App;

const Box = ({name, fru}) => {
  return(
    <div className='section'>
      <div className='fruit_box'>
        <p>{fru}</p>
        <p>{name}</p>
        <button className='drop_btn'>DROP</button>
      </div>
    </div>
  )
}
