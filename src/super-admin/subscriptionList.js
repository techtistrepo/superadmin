import React from 'react'
import Logo from '../assets/images/logo.png'
import Dash from '../assets/images/ico_dash.svg'
import rightIcon from '../assets/images/chevron-right-left.svg'
import superAdmin from '../assets/images/ico-superadmin.svg'
import userIcon from '../assets/images/ico-user-mgmt.svg'
import settingsIcon from '../assets/images/ico-settings.svg'
import userProfile from '../assets/images/userprofile.svg'
import AddIcon from '../assets/images/add.svg'
import { useNavigate } from 'react-router-dom'
import { AdminRouteNames } from '../approutes/route-constant'


const SubscriptionList = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.clear()
        navigate({ pathname: '/superadmin/login' }, {
            replace: true
        })
    }


    const handleClick =()=> {
        navigate({pathname: AdminRouteNames.SubscriptionAdd})
    }

    return (
        <>
            <header class="d-flex">
                <div class="logo">
                    <a><img src={Logo} /></a>
                </div>

                <div class="header-content d-flex justify-content-between align-items-center w-100">
                    <div class="header-title d-flex">
                        <img src={superAdmin} alt="Dashboard" width="28" height="28" /> <h1>Super admin</h1>
                    </div>

                    <div class="text-left secondary-menu">
                        <ul>
                            <li class="active"><a href="#">Subscriptions</a></li>
                            <li><a href="#">Subscription List</a></li>
                            <li><a href="#">Settings</a></li>
                        </ul>
                    </div>

                    <div class="">
                        <div class="dropdown show">
                            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={userProfile} alt="userprofile" />
                            </a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" onClick={handleLogout}>Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="content-area d-flex">
                <div class="left-menu">
                    <ul>
                        <li><a href="#"><img src={rightIcon} alt="chevron" /></a></li>
                        <li><a href="#"><img src={Dash} alt="Dashboard" /></a></li>
                        <li><a href="#"><img src={superAdmin} alt="Super admin" /></a></li>
                        <li><a href="#"><img src={userIcon} alt="User management" /></a></li>
                        <li><a href="#"><img src={settingsIcon} alt="Settings" /></a></li>
                    </ul>
                </div>
                <div class="content-area-blk w-100">
                    <div class="title-bar d-flex justify-content-between">
                        <h1>Subscriptions</h1>
                        <button class="btn btn-blue" onClick={handleClick}> <img src={AddIcon} alt="Add" /> <span>Add</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubscriptionList