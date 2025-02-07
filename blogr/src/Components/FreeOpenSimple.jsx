
import Laptop from '../images/illustration-laptop-desktop.svg'

const h1 = 'text-heading font-overpass text-2xl';
const paragraph = 'text-bodyCopy font-ubuntu'

export default function FreeOpenSimple() {
    return (
        <>
        <div className='flex-col items-center text-center relative md:text-center lg:flex lg:felx-row md:flex-row top-20 mx-10'>
        
                <div>
                    <img src={Laptop} alt="laptop" className='w-900 relative right-5 flex-shrink-0'/>
                </div>

                <div className='flex flex-col gap-20 '>
                    <div className='flex flex-col gap-4 '>
                    <h1 className={h1}>
                    Free, open, simple
                    </h1>
                    
                    <p className={paragraph}>
                    Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                    and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                    </p>
                    </div>
                    
                    <div className='flex flex-col gap-4'>
                    <h1 className={h1}>Powerful tooling</h1>
        
                    <p className={paragraph}> Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                    capable of producing even the most complicated sites.</p>
                    </div>
        
                </div>
        
        
                </div>
        
        </>
    )
}