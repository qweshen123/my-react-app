import React from 'react';
import './App.css';
const imgUrl = 'https://img-asset.chemm.com/assets/wcjs/v2.0/poster-battle.jpg'
// const circleImg = 'https://img-asset.chemm.com/assets/wcjs/v2.0/banner-pic.png'

// class Clock extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       date: new Date(),
//       num:0,
//       isLoggedIn:false
//     }
//     // this.click = this.click.bind(this)
//   }
//   // 第一次挂载
//   componentDidMount(){
//     console.log(React.$FetchUtils)
//     this.timerTD = setInterval(() => {
//       this.tick()
//     }, 1000);
//   }

//   // 被销毁 
//   componentWillUnmount(){
//     clearInterval(this.timerTD)
//   }

//   tick(){
//     this.setState({
//       date:new Date()
//     })
//     this.setState((state, props)=>{
//       return {
//         num: state.num + 1
//       }
//     })
//   }

//   click(e,index){
//     console.log(e,index)
//     this.setState((state, props) => {
//       return {
//         num:state.num + 100
//       }
//     })
//   }

//   handleOut(num){
//     console.log(num)
//     this.setState({
//       isLoggedIn:false
//     })
//   }

//   handleIn(){
//     this.setState({
//       isLoggedIn:true
//     })
//   }

//   render(){
//     const isLoggedIn = this.state.isLoggedIn
//     function LoginButton(props) {
//       return (
//         <button className="color-withe margin-auto" onClick={props.onClick}>
//           Login
//         </button>
//       );
//     }

//     function Warning(props){
//       if(!props.warn){
//         return null;
//       }

//       return (
//         <div className="warning">warning</div>
//       )
//     }
    
//     function LogoutButton(props) {
//       return (
//         <button className="color-withe margin-auto" onClick={props.onClick}>
//           Logout
//         </button>
//       );
//     }

//     function ListItems(props){
//       return (
//         <div className="color-withe">{props.value}</div>
//       )
//     }

//     function NumberList(props){
//       const list = props.list
//       // const listItems = list.map(item => <ListItems key={item.toString()} value={item}></ListItems>)
//       return (
//         <div>
//           {list.map(item => <ListItems key={item.toString()} value={item}></ListItems>)}
//         </div>
//       )
//     }

//     const stateNum = 5
//     // let button;
//     // if(isLoggedIn){
//     //   button = <LogoutButton onClick={() => {this.handleOut(stateNum)}}></LogoutButton>
//     // }else{
//     //   button = <LoginButton onClick={() => {this.handleIn()}}></LoginButton>
//     // }
//     return(
//       <div>
//         <h1 className="color-withe" onClick={(e) => {this.click(e,4)}}>Hello, world!</h1>
//         <h2 className="color-withe">It is {this.state.date.toLocaleTimeString()}</h2>
//         <Times flag={true} num={this.state.num}></Times>
//         {isLoggedIn 
//           ? <LogoutButton onClick={() => {this.handleOut(stateNum)}}></LogoutButton>
//           : <LoginButton onClick={() => {this.handleIn()}}></LoginButton>
//         }
//         {this.props.isShowMake &&
//           <h1 className="color-withe" >make</h1>
//         }
//         <Warning warn={true} />
//         <NumberList list={[1,2,3,4]}></NumberList>
//       </div>
//     )
//   }
// }
// function Times(props){
//   const flag = props.flag
//   if(flag){
//     return <h2 className="color-withe">{props.num}次</h2>
//   }
//   return <h2 className="color-withe">失败</h2>
// }


// class NameFrom extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       value:'',
//       isGoing:false,
//       numberOfGuests:2
//     }
//     this.handleInputChange = this.handleInputChange.bind(this)
//   }
//   handleInputChange(e){
//     console.log(e)
//     const target = e.target;
//     const value = target.name === 'isGoing' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }
//   handleOnSubmit(e){
//     console.log(this.state.value)
//     e.preventDefault();
//   }

//   handleChange(e){
//     console.log(e)
//     this.setState({
//       value:e.target.value
//     })
//   }

//   render(){
//     return (
//       // <form>
//       //   <label onSubmit={(e) => {this.handleOnSubmit(e)}}>
//       //     <input type="text" value={this.state.value} onChange={(e) => {this.handleChange(e)}}></input>
//       //     <select value={this.state.value} onChange={(e) => this.handleChange(e)}>
//       //       <option value="grapefruit">葡萄柚</option>
//       //       <option value="lime">酸橙</option>
//       //       <option value="coconut">椰子</option>
//       //       <option value="mango">芒果</option>
//       //     </select>
//       //   </label>
//       //   <input type="submit" value="提交" />
//       // </form>
//       <form>
//         <label>
//           参与:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           来宾人数:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange} />
//         </label>
//       </form>
//     )
//   }
// }


class ListWrap extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list:[]
    }
  }

  componentDidMount(){
    console.log(React.$wx)
    React.$FetchUtils('/mina/api/topic_item', {
      params:{
        tid:95,
        p:1,
        page_size:5
      }
    }).then(res => {
      const list = res.data.topic_list.map(item => {
          return {
              title:item.item_title,
              thumb:item.new_thumb,
              tid:item.item_id,
              commentCount:item.comment_count,
              readCount:item.post_hits
          }
      })
      console.log(list)
      this.setState({
        list
      })
    })
  }

  handleOnClick(e, tid){
    React.$wx.miniProgram.navigateTo({
        url: `/pages/news/detail/detail?article_id=${tid}`
    })
  }


  render(){
    let seft = this
    function ItemWrap(props){
      let itemWarp = seft.state.list.map(item => (
        <div className="items-wrap" key={item.tid} onClick={(e) => {seft.handleOnClick(e,item.tid)}}>
          <div className="title">{item.title}</div>
          <img className="item-imge" src={item.thumb}></img>
        </div>
      ))

      return (
        itemWarp
      )
    }
    return (
      <ItemWrap></ItemWrap>
    )
  }
}


function App() {
  return (
      <div className="warp">
          <img src={imgUrl} className="warp-img"/>
          <ListWrap/>
      </div>
  );
}
export default App;
