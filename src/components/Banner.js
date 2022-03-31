export default function Banner({bannerProp}){
	// console.log(props)
	console.log(bannerProp)
	
	const {title, description, destination, buttonDesc} = bannerProp
	console.log(title)

	return(
		<div className="jumbotron jumbotron-fluid">
		  <div className="container">
		    <h1 className="display-4">{title}</h1>
		    <p className="lead">{description}</p>
		    <a href={destination} className="btn btn-info">
		    	{buttonDesc}
		    </a>
		  </div>
		</div>

	)
}
