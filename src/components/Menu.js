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
    fetch('')
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
    return(
      <div></div>
    )
  }
}
export default Menu;