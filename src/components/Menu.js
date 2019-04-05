import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/mahaliroblesarbieto/LIM008-fe-burger-queen/developer/src/data/menu.json')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items:json,
      })
    })
  }
  // constructor() {
  //   super();
  //   this.state = {
  //     menu: menu
  //   }
  // }

  // render() {
  //   const menu = this.state.menu.map((item, i) => {
  //     return (
  //       <div>
  //         {item.title}
  //       </div>
  //     )
  //   })

  //   return (
  //     <div>
  //       {menu}
  //     </div>  
  //     )
  // }
  render() {
    let{isLoaded, items} = this.state;
    if(!isLoaded) {
      return <div>Loading...</div>
    }
    else {
      return(
        <div>Data has been loaded</div>
      )
    }
   
  }
}
export default Menu;