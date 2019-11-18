import React, { Component } from 'react'
import axios from 'axios'
import './index.scss'
export default class Hot extends Component {
  constructor(props) {
    super(props)

    this.state = {
         movies:[]
    }
}

componentDidMount(){
  this.getMaoyan()
}
componentWillReceiveProps(nextProps){
  this.getMaoyan(nextProps)
}
getMaoyan=()=>{
    axios({
        url:'/ajax/movieOnInfoList',
        params:{
            token:''
        }
    }).then(res=>{      
        this.setState({
          
            movies:res.data.movieList
        })
        // console.log('====================================');
        //   console.log(res.data.movieList);
        //   console.log('====================================');
       
    })
}
renderItem = () => {
  const {movies}=this.state
  return movies.map( (item,index) => <li key = { item.id }> 
  <img src = { item.img }/>
  <p> { item.nm }  </p>
 
    
    </li>)
}
render() {
  const {movies}=this.state
  return (
      <div>
        <ul className='list'>
          {this.getMaoyan()}
  { this.renderItem() }
</ul>

      
      </div>
  )
}
}
