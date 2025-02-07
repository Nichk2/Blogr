import Logo from '../images/logo.svg';

export default function Footer() {
    const footerContent = {
        Product: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
        Company: ["About", "Team", "Blog", "Careers"],
        Connect: ["Contact", "Newsletter", "LinkedIn"],
    };

    return (
        <>
            <footer className='bg-footerBg mt-50 p-20 px-20 rounded-tr-[5rem] flex flex-col items-center text-center sm:text-left sm:flex-row sm:justify-between lg:items-start lg:justify-evenly md:items-start'>

                <div className="lg:mb-30 mb-10 sm:mb-0">
                    <img src={Logo} alt="footer logo" />
                </div>
                {Object.keys(footerContent).map((section, index) => (
                    <div key={index} className="mb-10 sm:mb-0">
                        <h3 className='text-white font-medium mb-5'>{section}</h3>
                        <ul>
                            {footerContent[section].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href=""
                                        className="font-overpass text-sm hover:font-medium hover:underline hover:text-white transition-all duration-300 text-gray-500"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </footer>
        </>
    );
}