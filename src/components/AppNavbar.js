import {Fragment, useContext, useState, useEffect} from 'react'
import {Navbar, Container, Nav, Button, Modal} from 'react-bootstrap'
import UserContext from '../UserContext'
import {LoginModal, RegisterModal} from './Modal'
import {useNavigate} from 'react-router-dom'

const token = localStorage.getItem('token')
const admin = localStorage.getItem('isAdmin')


export default function AppNavBar(){
	const navigate = useNavigate()

	// const[login, setLogin] = useState(false)
	// const[register, setRegister] = useState(false)

	const logout = () => {
		localStorage.clear()
		console.log(`hi`)
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

	const Buttons = () => {
		if(token != null || token != undefined){
				return(
				<Fragment>
						<Button variant="outline-warning" className="button"><a href="./Menu">Order Now</a></Button>
				</Fragment>
			)

			}else{
				return(
				<Fragment>
					{/*<Button variant="outline-warning" className="button" onClick={()=>setLogin(true)}>Log in</Button>
					<Button variant="outline-warning" className="button" onClick={()=>setRegister(true)}>Register</Button>*/}

					<LoginModal />
					<RegisterModal />
				</Fragment>
				)
				
			}
		}


	return(
	<header>
		<div className="container header">
			<div className="navbar">
				<nav className="text-center">
					<ul>
						<li><a href="">HOME</a></li>
						<li><a href="./Menu">MENU</a></li>
						<Profile />

					</ul>
				</nav>	
			</div>
			<div className="headerText text-center text-light p-5 col-12">
				<h1>BURGER HELL</h1>
				<h5>Eat your heart out and taste Greateness in a bun</h5>
				<div className="d-flex p-5 justify-content-center flex-wrap">
				<Buttons />
				</div>
			</div>
		</div>
	</header>
	)
}

