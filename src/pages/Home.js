import {Fragment} from 'react'
import AppNavbar from './../components/AppNavbar'
import Banner from './../components/Banner'
import Footer from './../components/Footer'
import Highlights from './../components/Highlights'
// import CourseCard from './../components/CourseCard'

export default function Home(){
	return(
		// render navbar, banner & footer in the webpage via home.js
		<Fragment>
			<AppNavbar/>
			<Banner/>
			<Highlights/>
			{/*<CourseCard/>*/}
			<Footer/>
		</Fragment>
	)
}