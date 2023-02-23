//Element spans the while 100% of the width while rest of the site usually does not
export default function LineGradient({width= "w-full"}){
    return <div className={`h-0.5 ${width} bg-gradient-rainblue`} />

}