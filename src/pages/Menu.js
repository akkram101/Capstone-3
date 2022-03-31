import {Fragment, useState, useEffect} from 'react'
import Navigation from '../components/Navbar'
import Sticker from '../components/Sticker'
import Categories from '../components/Categories'
// import QuantitySelector from '../components/QuantitySelector'
const token=localStorage.getItem(`token`)
export default function Menu() {

	const [Meals,setMeals] =useState("")
	const [Burgers,setBurgers] =useState("")
	const [Sides,setSides] =useState("")
	const [Beverages,setBeverages] =useState("")

	const [quantity, setQuantity]=useState(1)

	const quantityIncrement = () =>{
		setQuantity(prevQuantity => prevQuantity + 1)
	}

	const quantityDecrement = () =>{
		setQuantity(prevQuantity => prevQuantity -1)
	}

	// useEffect(()=>{
	// 	console.log(`hello`)
	// },[quantity])


	useEffect( ()=>{
	fetch(`http://localhost:3009/api/item/meals`,{
			method:"GET"
		})
		.then(result=>result.json())
		.then(result =>{
			if(result.length<1){
				setMeals("No Meals Available")
			}else {
				setMeals(
					result.map(meals => {
					const {itemName, description, price, _id} = meals
					const menuTargetModalId= `#menu${_id}`
					const menuModalId=`menu${_id}`
					const menuForm=`${_id}Form`
					const addCart=`${_id}addCart`
					const quant=`${_id}quant`
					return(		
					<Fragment key={_id}>				
						<div className="col-6 col-sm-3" >
							<a href="#" data-toggle="modal" data-target={menuTargetModalId}> 
							<img src="../images/sampleMeal.png" width="200px" height="200px" className="img-fluid" />
							</a>
							<p>{itemName}</p>
						</div>
						<div className="modal fade" id={menuModalId} tabIndex="-1" aria-labelledby="${_id}ModalLabel" aria-hidden="true">
						  <div className="modal-dialog modal-dialog-centered">
						    <div className="modal-content">
						      <div className="modal-header">
						      	<img src="../images/sampleMeal.png" width="300px" height="300px" className="img-fluid modal-title mx-auto" />
						        
						        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={ ()=> setQuantity(1)}>
						           	<span aria-hidden="true">&times;</span>
						        </button>
						      </div>
						      <div className="modal-body text-left p-3 m-3">
						        <h4 id="${_id}OrderName"><strong>{itemName}</strong></h4>
						        <p>${price}</p>
						        <p>{description}</p>
				         		<div className="text-center"><strong>
				         			<button className="btn btn-warning mx-3" onClick={quantityDecrement}>-</button>
				         			<span id={quant}>{quantity}</span>
				         			<button className="btn btn-warning mx-3" onClick={quantityIncrement}>+</button></strong>						        
				         		</div>
						      </div>
						      <div className="modal-footer">
						        <button type="submit" className="btn btn-warning btn-block" id={addCart}>Add to Cart</button>
						      </div>
						    </div>
						  </div>
						</div>
					</Fragment>
						)

					})
				)
			} 
		})
	}, [quantity])

	useEffect( ()=>{
	fetch(`http://localhost:3009/api/item/burgers`,{
			method:"GET"
		})
		.then(result=>result.json())
		.then(result =>{
			if(result.length<1){
				setBurgers("No Meals Available")
			}else {
				setBurgers(
					result.map(result => {
					const {itemName, description, price, _id} = result
					const burgerTargetModalId= `#burger${_id}`
					const burgerModalId=`burger${_id}`
					const addCart=`${_id}addCart`
					const quant=`${_id}quant`
					return(		
					<Fragment key={_id}>				
						<div className="col-6 col-sm-3" >
							<a href="#" data-toggle="modal" data-target={burgerTargetModalId}> 
							<img src="../images/sampleBurger.png" width="200px" height="200px" className="img-fluid" />
							</a>
							<p>{itemName}</p>
						</div>
						<div className="modal fade" id={burgerModalId} tabIndex="-1" aria-labelledby="${_id}ModalLabel" aria-hidden="true">
						  <div className="modal-dialog modal-dialog-centered">
						    <div className="modal-content">
						      <div className="modal-header">
						      	<img src="../images/sampleBurger.png" width="300px" height="300px" className="img-fluid modal-title mx-auto" />
						        
						        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={ ()=> setQuantity(1)}>
						           	<span aria-hidden="true">&times;</span>
						        </button>
						      </div>
						      <div className="modal-body text-left p-3 m-3">
						        <h4 id="${_id}OrderName"><strong>{itemName}</strong></h4>
						        <p>${price}</p>
						        <p>{description}</p>
				         		<div className="text-center"><strong>
				         			<button className="btn btn-warning mx-3" onClick={quantityDecrement}>-</button>
				         			<span id={quant}>{quantity}</span>
				         			<button className="btn btn-warning mx-3" onClick={quantityIncrement}>+</button></strong>						        
				         		</div>
						      </div>
						      <div className="modal-footer">
						        <button type="submit" className="btn btn-warning btn-block" id={addCart}>Add to Cart</button>
						      </div>
						    </div>
						  </div>
						</div>
					</Fragment>
						)

					})
				)
			} 
		})
	}, [quantity])

	useEffect( ()=>{
	fetch(`http://localhost:3009/api/item/sides`,{
			method:"GET"
		})
		.then(result=>result.json())
		.then(result =>{
			if(result.length<1){
				setSides("No Sides Available")
			}else {
				setSides(
					result.map(result => {
					const {itemName, description, price, _id} = result
					const menuTargetModalId= `#menu${_id}`
					const menuModalId=`menu${_id}`
					const addCart=`${_id}addCart`
					const quant=`${_id}quant`
					return(		
					<Fragment key={_id}>				
						<div className="col-6 col-sm-3" >
							<a href="#" data-toggle="modal" data-target={menuTargetModalId}> 
							<img src="../images/sampleSide.png" width="200px" height="200px" className="img-fluid" />
							</a>
							<p>{itemName}</p>
						</div>
						<div className="modal fade" id={menuModalId} tabIndex="-1" aria-labelledby="${_id}ModalLabel" aria-hidden="true">
						  <div className="modal-dialog modal-dialog-centered">
						    <div className="modal-content">
						      <div className="modal-header">
						      	<img src="../images/sampleSide.png" width="300px" height="300px" className="img-fluid modal-title mx-auto" />
						        
						        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={ ()=> setQuantity(1)}>
						           	<span aria-hidden="true">&times;</span>
						        </button>
						      </div>
						      <div className="modal-body text-left p-3 m-3">
						        <h4 id="${_id}OrderName"><strong>{itemName}</strong></h4>
						        <p>${price}</p>
						        <p>{description}</p>
				         		<div className="text-center"><strong>
				         			<button className="btn btn-warning mx-3" onClick={quantityDecrement}>-</button>
				         			<span id={quant}>{quantity}</span>
				         			<button className="btn btn-warning mx-3" onClick={quantityIncrement}>+</button></strong>						        
				         		</div>
						      </div>
						      <div className="modal-footer">
						        <button type="submit" className="btn btn-warning btn-block" id={addCart}>Add to Cart</button>
						      </div>
						    </div>
						  </div>
						</div>
					</Fragment>
						)

					})
				)
			} 
		})
	}, [quantity])

	useEffect( ()=>{
	fetch(`http://localhost:3009/api/item/beverages`,{
			method:"GET"
		})
		.then(result=>result.json())
		.then(result =>{
			if(result.length<1){
				setBeverages("No Sides Available")
			}else {
				setBeverages(
					result.map(result => {
					const {itemName, description, price, _id} = result
					const menuTargetModalId= `#menu${_id}`
					const menuModalId=`menu${_id}`
					const addCart=`${_id}addCart`
					const quant=`${_id}quant`
					return(		
					<Fragment key={_id}>				
						<div className="col-6 col-sm-3" >
							<a href="#" data-toggle="modal" data-target={menuTargetModalId}> 
							<img src="../images/sampleBeverage.png" width="200px" height="200px" className="img-fluid" />
							</a>
							<p>{itemName}</p>
						</div>
						<div className="modal fade" id={menuModalId} tabIndex="-1" aria-labelledby="${_id}ModalLabel" aria-hidden="true">
						  <div className="modal-dialog modal-dialog-centered">
						    <div className="modal-content">
						      <div className="modal-header">
						      	<img src="../images/sampleBeverage.png" width="300px" height="300px" className="img-fluid modal-title mx-auto" />
						        
						        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={ ()=> setQuantity(1)}>
						           	<span aria-hidden="true">&times;</span>
						        </button>
						      </div>
						      <div className="modal-body text-left p-3 m-3">
						        <h4 id="${_id}OrderName"><strong>{itemName}</strong></h4>
						        <p>${price}</p>
						        <p>{description}</p>
				         		<div className="text-center"><strong>
				         			<button className="btn btn-warning mx-3" onClick={quantityDecrement}>-</button>
				         			<span id={quant}>{quantity}</span>
				         			<button className="btn btn-warning mx-3" onClick={quantityIncrement}>+</button></strong>						        
				         		</div>
						      </div>
						      <div className="modal-footer">
						        <button type="submit" className="btn btn-warning btn-block" id={addCart}>Add to Cart</button>
						      </div>
						    </div>
						  </div>
						</div>
					</Fragment>
						)

					})
				)
			} 
		})
	}, [quantity])



	useEffect(()=>{fetch(`http://localhost:3009/api/item/burgers`,{
			method:"GET"
		})
		.then(result=>result.json())
		.then(result =>{
			if(token == undefined){
				result.forEach(result=>{
				document.getElementById(`${result._id}addCart`).addEventListener("click",(e) =>{
				e.preventDefault()
				alert(`Please Log in`)
				})})
			}else {
			result.forEach(result=>{
				document.getElementById(`${result._id}addCart`).addEventListener("click",(e) =>{
				e.preventDefault()
				const Quantity = (parseInt(document.getElementById(`${result._id}quant`).textContent))
				const{itemName, price, _id}=result


				fetch(`http://localhost:3009/api/users/order`,{
					method:"POST",
					headers:{
						"Content-Type":"application/json",
						"Authorization":`Bearer ${token}`
					},
					body:JSON.stringify({
						itemId:_id,
						itemName:itemName,
						quantity:Quantity,
						price:price,
						totalAmount: (price*Quantity)
					})
				})
				.then(result=>result.json)
				.then(result => {
					alert(`Item added to cart`)
					setQuantity(1)
				})
				})
			})
		} 
	})
	},[])
	
	useEffect(()=>{fetch(`http://localhost:3009/api/item/meals`,{
			method:"GET"
		})
		.then(result=>result.json())
		.then(result =>{
			if(token == undefined){
				result.forEach(result=>{
				document.getElementById(`${result._id}addCart`).addEventListener("click",(e) =>{
				e.preventDefault()
				alert(`Please Log in`)
				})})
			}else {
			result.forEach(result=>{
				document.getElementById(`${result._id}addCart`).addEventListener("click",(e) =>{
				e.preventDefault()
				const MealQuantity = (parseInt(document.getElementById(`${result._id}quant`).textContent))
				const{itemName, price, _id}=result


				fetch(`http://localhost:3009/api/users/order`,{
					method:"POST",
					headers:{
						"Content-Type":"application/json",
						"Authorization":`Bearer ${token}`
					},
					body:JSON.stringify({
						itemId:_id,
						itemName:itemName,
						quantity:MealQuantity,
						price:price,
						totalAmount: (price*MealQuantity)
					})
				})
				.then(result=>result.json)
				.then(result => {
					alert(`Item added to cart`)
					setQuantity(1)
				})
			})
			})
			}
		})
	},[])

	useEffect(()=>{fetch(`http://localhost:3009/api/item/sides`,{
			method:"GET"
		})
		.then(result=>result.json())
		.then(result =>{
			if(token == undefined){
				result.forEach(result=>{
				document.getElementById(`${result._id}addCart`).addEventListener("click",(e) =>{
				e.preventDefault()
				alert(`Please Log in`)
				})})
			}else {
			result.forEach(result=>{
				document.getElementById(`${result._id}addCart`).addEventListener("click",(e) =>{
				e.preventDefault()
				const Quantity = (parseInt(document.getElementById(`${result._id}quant`).textContent))
				const{itemName, price, _id}=result


				fetch(`http://localhost:3009/api/users/order`,{
					method:"POST",
					headers:{
						"Content-Type":"application/json",
						"Authorization":`Bearer ${token}`
					},
					body:JSON.stringify({
						itemId:_id,
						itemName:itemName,
						quantity:Quantity,
						price:price,
						totalAmount: (price*Quantity)
					})
				})
				.then(result=>result.json)
				.then(result => {
					alert(`Item added to cart`)
					setQuantity(1)
				})
				})
			})
		} 
	})
	},[])

	useEffect(()=>{fetch(`http://localhost:3009/api/item/beverages`,{
			method:"GET"
		})
		.then(result=>result.json())
		.then(result =>{
			if(token == undefined){
				result.forEach(result=>{
				document.getElementById(`${result._id}addCart`).addEventListener("click",(e) =>{
				e.preventDefault()
				alert(`Please Log in`)
				})})
			}else {
			result.forEach(result=>{
				document.getElementById(`${result._id}addCart`).addEventListener("click",(e) =>{
				e.preventDefault()
				const Quantity = (parseInt(document.getElementById(`${result._id}quant`).textContent))
				const{itemName, price, _id}=result


				fetch(`http://localhost:3009/api/users/order`,{
					method:"POST",
					headers:{
						"Content-Type":"application/json",
						"Authorization":`Bearer ${token}`
					},
					body:JSON.stringify({
						itemId:_id,
						itemName:itemName,
						quantity:Quantity,
						price:price,
						totalAmount: (price*Quantity)
					})
				})
				.then(result=>result.json)
				.then(result => {
					alert(`Item added to cart`)
					setQuantity(1)
				})
				})
			})
		} 
	})
	},[])



	return(
		<Fragment>
			<Navigation />
			<Sticker />
			<Categories />
			<div className="container-fluid menu">
				<div className="row text-center">

					<div className="col-12 col-md-8">
						<h1 id="mealsh1">MEALS</h1>
						<div className="row align-items-center" id="meals">
						{Meals}
						</div>
						<h1 id="burgersh1">BURGERS</h1>
						<div className="row" id="burgers">
						{Burgers}
						</div>
						<h1 id="sidesh1">SIDES</h1>
						<div className="row " id="sides">
						{Sides}
								
							
						</div>
						<h1 id="beveragesh1">BEVERAGES</h1>
						<div className="row " id="beverages">
						{Beverages}
							
							
						</div>
					</div>
				</div>
			</div>
		</Fragment>
		)
}