"use client"

import { useState } from "react"
import HomePage from "./home-page"
import { ImpactPopup } from "@/components/impact-popup"

export default function Page() {
  const [showPopup, setShowPopup] = useState(true)

  return (
    <>
      <HomePage />
      {showPopup && <ImpactPopup onClose={() => setShowPopup(false)} />}
    </>
  )
}
