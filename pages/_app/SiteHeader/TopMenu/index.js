import React, {useState} from 'react';
import faBars from '@fortawesome/fontawesome-free-solid/faBars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Item from './item'
import styled from "styled-components";

const Menu = styled.div`
    ${(props) => {
    const {type} = props;
    if (type) {
        return `
        display: inline-block;
        vertical-align: top;
      `;
    }
    return 'float: left;';
}}
`;

 const TopMenu = ()=> {


     const [menu_class, setMenuClass] = useState(false);
  const setToggleTopMenuClass = () =>{
        if (menu_class === false) {
           setMenuClass('toggled');
        } else {
            setMenuClass(false);
        }
    };



        let top_menu_class = `top-menu ${menu_class}`;
        return (
           <Menu type ={top_menu_class}>
               <div className='right'>
                   <Item text='Right1' />
                   <Item text='Right2' />
               </div>
               <FontAwesomeIcon icon={faBars} className='top-menu-icon' onClick={setToggleTopMenuClass}/>
               <div className='clear-fix' />
           </Menu>





        )

}

export default TopMenu;
