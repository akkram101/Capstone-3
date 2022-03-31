import {Fragment} from 'react'
import Bestseller from './../components/Bestseller'
import AppNavbar from '../components/AppNavbar'
const registerSubmit = document.getElementById('registerSubmit');
const loginSubmit=document.getElementById(`loginSubmit`)
const profile= document.getElementById(`profile`)
const id=localStorage.getItem(`id`)
const token=localStorage.getItem(`token`)




export default function Home(){

	const data ={
        title: "Welcome to Course Booking",
        text: "Opportunbitetiuoahuisdabdfrfqa",
        button: "Go to courses",
        link: "/courses"
    }	
	
	return(
		
		<Fragment>
			<AppNavbar />
			<Bestseller />
		</Fragment>
	)
}