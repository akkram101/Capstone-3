

export default function Banner({bannerProp}){
	
const {title, text, link, button} = bannerProp


    return(
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{title}</h1>
                <p className="lead">{text}</p>
                <a className="btn btn-info" href={link}>{button}</a>
            </div>
        </div>
    )
}


