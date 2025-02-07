import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion' 
import Arrow from '../images/arrow-light.svg'
import '../index.css'
import { useState } from 'react';



const arrowL = <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7"><path fill="none" stroke="#FFF" strokeWidth="2" opacity=".75" d="M1 1l4 4 4-4"/></svg>



export default function Items({ names }) {

    const [isArrowRotated, setArrowRotated] = useState(false)

    const dropdownContent = {
      Product: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
      Company: ["About", "Team", "Blog", "Careers"],
      Connect: ["Contact", "Newsletter", "LinkedIn"],
  }; 
    

    const handleArrowRotation = () => {
        setArrowRotated(!isArrowRotated)
        }

    return (
      <Popover className= 'relative'>
        {({ open }) => (
          <>
            <PopoverButton onClick={handleArrowRotation} className='flex items-center gap-3 text-white font-ubuntu hover:opacity-80 transition-opacity'>{names}<span
              className={`transition-transform duration-300 ${
                isArrowRotated ? 'rotate-180' : ''
              }`}
            >
              {arrowL}
            </span></PopoverButton>
            <AnimatePresence>
              {open && (
                <PopoverPanel
                  static
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  anchor="bottom"
                  className="flex origin-top flex-col mt-3 bg-white p-5 gap-3 rounded shadow-2xl w-35 absolute z-[100]"
                >
                  {dropdownContent[names]?.map((item, index) => (
                  <a
                    key={index}
                    href=""
                    className="font-overpass text-sm hover:font-medium hover:text-black transition-all duration-300 text-gray-500"
                  >
                    {item}
                  </a>
                ))}
              </PopoverPanel>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  );
}