

export const List = ({data}) => {
    return <div class="outer__box">
    <div className='box'>
      <img src='https://github.com/user-attachments/assets/ad0a26d2-59d9-48ff-935b-f4d509d9e42f'/>
      <p style={{color : "white"}}>{data?.name}</p>
    </div>
    <div className='value__box'>
      <p className='value__won'>{data.value}</p>
      <p className='value__dolor'>${data.dolor}</p>
    </div>
  </div>
  }