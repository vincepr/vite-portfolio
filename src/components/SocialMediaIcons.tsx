type LinkIconData = {
    name:string,
    href:string,
    imgSrc:string,
}[]


export default function SocialMediaIcons(){
    const data:LinkIconData = [
        {name:"linkedin",href:"https://www.linkedin.com", imgSrc:"/src/assets/linkedin.png"},
        {name:"facebook",href:"https://www.facebook.com", imgSrc:"/src/assets/facebook.png"},
        {name:"twitter",href:"https://www.twitter.com", imgSrc:"/src/assets/twitter.png"},
        {name:"instagram",href:"https://www.instagram.com", imgSrc:"/src/assets/instagram.png"},
    ]
    const MediaIcons =(data:LinkIconData)=> data.map((oneLink,idx)=>
    <a className="hover:opacity-50 transition duration-500"
        key={oneLink.name+idx}
        href={oneLink.href}
        target="_blank" rel="noreferrer"
    > 
        <img alt={oneLink.name} src={oneLink.imgSrc}/>
    </a>)

    return(
        <div className="flex justify-center md:justify-start my-10 gap-7">
            {MediaIcons(data)}
        </div>
    )
}