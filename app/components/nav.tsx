import Link from 'next/link'
import Image from 'next/image'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'projects',
  },
  '/education': {
    name: 'education and achievements',
  },
  '/work_exp': {
    name: 'work experience',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between px-4 py-2 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo_light.png"
              alt="Alex Frost Logo"
              width={40}
              height={40}
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-row space-x-4">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
