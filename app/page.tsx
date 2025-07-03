"use client"

import { useState, useEffect } from "react"
import HomePage from "./home-page"
import ImpactPopup from "@/components/impact-popup"

export default function Page() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // Show popup when component mounts (page loads)
    setShowPopup(true)
  }, [])

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <>
      <HomePage />
      <ImpactPopup isOpen={showPopup} onClose={handleClosePopup} />
    </>
  )
}
