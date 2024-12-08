'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Home, BookOpen, Award, ShoppingBag, ClipboardList } from 'lucide-react'

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <nav 
      className={`bg-red-600 text-white h-screen ${
        isExpanded ? 'w-64' : 'w-16'
      } transition-all duration-300 ease-in-out flex flex-col`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <Button
        className="p-2 m-2 bg-transparent hover:bg-red-700"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <X size={24} /> : <Menu size={24} />}
      </Button>
      <div className="flex flex-col space-y-4 mt-8">
        <NavItem href="/" icon={<Home size={24} />} text="Home" isExpanded={isExpanded} />
        <NavItem href="/flashcards" icon={<BookOpen size={24} />} text="Fruit and Veggie Flashcards" isExpanded={isExpanded} />
        <NavItem 
          href="#" 
          icon={<ClipboardList size={24} />} 
          text="Quizzes" 
          isExpanded={isExpanded}
          subItems={[
            { href: '/fruit-veggie-quiz', text: 'Fruit & Veggie Quiz' },
            { href: '/operations-quiz', text: 'Operations Quiz' },
          ]}
        />
        <NavItem href="/leaderboards" icon={<Award size={24} />} text="Leaderboards" isExpanded={isExpanded} />
        <NavItem href="/gear" icon={<ShoppingBag size={24} />} text="Gear" isExpanded={isExpanded} />
      </div>
    </nav>
  )
}

const NavItem = ({ href, icon, text, isExpanded, subItems }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <div>
      <Link 
        href={href} 
        className="flex items-center p-2 hover:bg-red-700 transition-colors duration-200"
        onClick={(e) => {
          if (subItems) {
            e.preventDefault();
            setIsSubMenuOpen(!isSubMenuOpen);
          }
        }}
      >
        {icon}
        {isExpanded && (
          <>
            <span className="ml-2">{text}</span>
            {subItems && (
              <span className="ml-auto">
                {isSubMenuOpen ? '▼' : '▶'}
              </span>
            )}
          </>
        )}
      </Link>
      {isExpanded && isSubMenuOpen && subItems && (
        <div className="ml-4">
          {subItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href} 
              className="block p-2 hover:bg-red-700 transition-colors duration-200"
            >
              {item.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar

