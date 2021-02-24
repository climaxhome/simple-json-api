import React from 'react';

class Banana extends React.Component {

    constructor(props) {
    super(props)
    this.state = {
      items:[],
      isLoaded: false,
      }
   }

  componentDidMount() {
    fetch('http://165.22.251.105/list/Banana')
      .then(res => res.json())
      .then(json => (
        this.setState({
          isLoaded: true,
          items:json,
        })
      ))
  }

  render() {
     var { isLoaded, items} = this.state;
     
     if(!isLoaded) {
       return (<div>loading...</div>);
     } else {
        return (
          <div>
            <ul> 
              {items.map(item => (
                <li key={item.id}>
                  Name: {item.found} | Quantity: {item.qty} | CreateAt: {item.created_at} | UpdateAt: {item.updated_at}
                </li>
              )
              )
              }
            </ul>
           
          </div>
        )
     }
  }
  
}

export default Banana;