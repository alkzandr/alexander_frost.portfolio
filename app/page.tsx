"use client"

import Image from "next/image"
import { BlogPosts } from "app/components/posts"
import { useEffect, useState } from "react"

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)")
    setIsDarkMode(darkMode.matches)

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches)
    darkMode.addEventListener("change", handleChange)

    return () => darkMode.removeEventListener("change", handleChange)
  }, [])

  return (
    <section>
      <div className="flex items-center mb-4">
        <Image
          src={isDarkMode ? "/logo_light.png" : "/logo_dark.png"}
          alt="Alex Frost Logo"
          width={40}
          height={40}
          className="mr-4"
        />
        <div>
          <h1 className="mb-1 text-2xl font-semibold tracking-tighter">
            Alex Frost
          </h1>
          <h2 className="mb-1 text-xl font-medium">Electrical Engineer</h2>
          <h3 className="mb-8 text-lg font-normal text-gray-600">Wollongong, NSW</h3>
        </div>
      </div>
      <p className="mb-4">
        {`This is a showcase of various academic and personal projects I have completed throughout my career`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
