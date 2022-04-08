import {Fragment, useContext, useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'
import UserContext from '../UserContext'
import {LoginModal, RegisterModal} from './Modal'
import {useNavigate} from 'react-router-dom'

const token = localStorage.getItem('token')
const id=localStorage.getItem('id')
const admin=localStorage.getItem('isAdmin')


export default function Navigation(){


	const logout = () => {
		localStorage.clear()
		window.location.reload(false)
	}

	const Profile = () => {
		if(token != null || token != undefined){

			if(admin=="true"){

				return(
				<Fragment>
					<a href='./profile'>PROFILE</a>
					<Button variant="outline-warning" onClick={logout} className="button mx-3">Logout</Button>
				</Fragment>
				)
			}else{
				return(
				<Fragment>
					<Button variant="outline-warning" onClick={logout} className="button mx-3">Logout</Button>
				</Fragment>
				)
			}

		}else{
				return(
				<Fragment>
					<LoginModal />
				</Fragment>
				)
				
			}
		}

	return(

			<div className="menuNav">
				<div className="container navc">
					<div className="navbar">
						<nav className="text-center">
							<ul>
								<li><a href="/">HOME</a></li>
								<li><a href="/Menu">MENU</a></li>
								<Profile />
							</ul>
						</nav>	

					</div>
				</div>
			</div>
		)
}