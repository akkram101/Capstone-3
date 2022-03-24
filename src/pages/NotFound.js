import Banner from '../components/Banner'

export default function NotFound(){
	const NotFoundContent ={
        title: "Error 404",
        text: "Page Not Found",
        button: "Go back to homepage",
        link: "/"
    }	

    return <Banner bannerProp={NotFoundContent}/>     
}

