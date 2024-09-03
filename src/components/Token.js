import './App.css';

function App() {

  const array = [{
    name: "입장요금",
    value: 0,
  },
  {
    name: "상금 풀",
    value: 1000,
  },]
  
  return (
    <div className='con'>
      <Token name={"입장요금"} value={0} emo='💳' emo2='😀'/>
      <Token name={"상금 풀"} value={1000} emo='🏆' emo2='😴'/>
    <div className='cal'>
        <span>계산</span>
    </div>
  </div>
  );
}

export default App;



const Token = ({name, value, emo, emo2}) => {

  return(
    <div className='section'>
        <div className='name'>
          <p>{emo}</p>
          <p>{name}</p>
        </div>
        <div className='value'>
          <p>{emo2}</p>
          <p>{value}</p>
        </div>
      </div>
  )
}