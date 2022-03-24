import {Fragment} from 'react'
import Banner from './../components/Banner'
import Highlights from './../components/Highlights'


export default function Home(){

	const data ={
        title: "Welcome to Course Booking",
        text: "Opportunbitetiuoahuisdabdfrfqa",
        button: "Go to courses",
        link: "/courses"
    }	
	
	return(
		
		<Fragment>
			<Banner bannerProp={data}/>
			<Highlights/>	
		</Fragment>
	)
}