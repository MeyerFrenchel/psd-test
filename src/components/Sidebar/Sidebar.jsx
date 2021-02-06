import React from 'react'
import './Sidebar.style.css'
import Dashboard from '../../assets/dashboard-interface 1.png';
import CustomerList from '../../assets/customer 1 (1).png';
import ShoppingList from '../../assets/shopping-list 1.png'
const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className='elements'>
            <a href="">
            <img src={Dashboard} alt=""/>
            </a>
            <a href="">
            <img src={CustomerList} alt=""/>
            </a>
            <a href="">
            <img src={ShoppingList} alt=""/>
            </a>   
            </div>
            
            

        </div>
    );
};

export default Sidebar;
