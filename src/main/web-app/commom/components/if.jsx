import React from 'react'

export default class If extends React.Component{

   render(){
          return (
            this.props.test ?  this.props.children : null
          ) 
   }
}