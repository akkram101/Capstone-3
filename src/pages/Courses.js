import {Fragment,useContext} from 'react'
import coursesData from './../mockData/courses'
import CourseCard from './../components/CourseCard'
import UserContext from '../UserContext'


export default function Courses(){
	// console.log(coursesData[0])

	const {user,setUser}=useContext(UserContext)
	console.log(user)

	const courses = coursesData.map(course => {
		
		return <CourseCard key={course.id} courseProp={course} />
	})

	return(
		<Fragment>
			{courses}
			{/*<CourseCard courseProp={coursesData[0]} />*/}
		</Fragment>
	)
}