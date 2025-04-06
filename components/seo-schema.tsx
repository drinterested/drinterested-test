"use client"

import { useEffect } from "react"

interface SeoSchemaProps {
  schema: Record<string, any>
}

export default function SeoSchema({ schema }: SeoSchemaProps) {
  useEffect(() => {
    // Add schema to head when component mounts
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)

    // Clean up when component unmounts
    return () => {
      document.head.removeChild(script)
    }
  }, [schema])

  // This component doesn't render anything visible
  return null
}

