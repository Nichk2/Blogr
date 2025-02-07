export default function Hero() {
    return (
       <>
       <div className="mx-auto container relative -top-75 z-30">
       <h1 className="text-white text-5xl font-ubuntu text-center">
            A modern publishing platform
        </h1>
        <p className="text-white text-center py-5 font-ubuntu">
            Grow your audience and build your online brand
        </p>

        <div className="flex gap-3.5 text-center justify-center py-5">
            <button className="bg-white rounded-full text-ctaRed px-6 py-2 font-medium font-ubuntu text-sm sm:text-base hover:bg-ctaRed hover:text-white transition-colors">Start for Free</button>
            <button className="bg-transparent borde-white-1 rounded-full text-white px-6 py-2 font-medium font-ubuntu text-sm sm:text-base hover:bg-white hover:text-ctaRed transition-colors border-2 hover:border-white">Learn More</button>
        </div>
       </div>
         

       </>
    )
}