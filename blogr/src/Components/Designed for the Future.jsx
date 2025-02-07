import SectionImg from '../images/illustration-editor-desktop.svg';

const h1 = 'text-heading font-overpass text-2xl';
const paragraph = 'text-bodyCopy font-ubuntu ';

export default function DesignedFuture() {
    return (
        <>
            <section className='overflow-x-clip -mt-20 mb-40'>
                {/* Título centralizado */}
                <h1 className='text-heading font-overpass text-3xl font-medium text-center my-5'>
                    Designed for the future
                </h1>
                

                {/* main container */}
                <div className='flex flex-col-reverse lg:flex-row items-center md:mt-30 mx-20'>
                    
                    {/* Tex */}
                    <div className='gap-8 lg:text-left my-20 md:gap-20 md:text-center text-center '>
                    
                        <div className='flex flex-col gap-4 mb-20'>
                            <h1 className={h1}>
                                Introducing an extensible editor
                            </h1>
                            <p className={paragraph}>
                                Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
                            </p>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <h1 className={h1}>Robust content management</h1>
                            <p className={paragraph}>
                                Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                            </p>
                        </div>
                    </div>

                    {/* Img */}
                    <div>
                        <img 
                            src={SectionImg} 
                            alt="section img1" 
                            className='w-400 md:w-900 lg:w-900 object-contain md:relative md:left-50 my-10 -mb-5 md:-ml-45'
                        />
                    </div>
                </div>
            </section>
        </>
    );
}