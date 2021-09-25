import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons  from "react-icons/bs";
import Dashboard from '../../pages/Dashboard'
import Customers from '../../pages/Customers'
import Messages from '../../pages/Messages'
import Account from '../../pages/Account'
export const SideBarData = [
  {
    title: 'Dashboard',
    path: '/Dashboard',
    icon: <AiIcons.AiOutlineAreaChart/>,
    cName: 'nav-text'
  },
  {

    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Account',
    path: '/Account',
    icon: <BsIcons.BsFillPersonLinesFill />,
    cName: 'nav-text'
  },
  {
    title: 'customers',
    path: '/customers',
    icon: <IoIcons.IoIosPeople />,
    cName: 'nav-text'
  },
 
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];