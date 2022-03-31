import {Fragment} from 'react'
const admin=localStorage.getItem(`isAdmin`)

export default function SideNav(){

	const AdminCheck=()=>{
		if(admin=="true"){
			return(
				<Fragment>
				<li><a href="#">Edit Profile</a></li>
				<li><a href="#myOrders">Manage Orders</a></li>
				<li><a href="#users">Manage Users</a></li>
				<li><a href="#products">Manage Products</a></li>
				<li><a href="#">Business Insights</a></li>
				<li><a href="#">Settings</a></li>
				</Fragment>
				)
		}else{
			return(
				<Fragment>
				<li><a href="#">Edit Profile</a></li>
				<li><a href="#myOrders">My Orders</a></li>
				<li><a href="#">My Addresses</a></li>
				<li><a href="#">Payment Methods</a></li>
				<li><a href="#">Settings</a></li>
				</Fragment>
				)
		}
	}


	return(
		<Fragment>
			<div className="sideNav sticky-top text-center pt-5">
				<img src="https://i.pinimg.com/550x/9f/d6/e2/9fd6e2c532bb9003cded155af3573415.jpg" width="150px" height="150px" className="img-fluid" />
				<ul className="p-5 text-left" id="ul">	
				<AdminCheck />
				</ul>
			</div>
		</Fragment>
		)
}