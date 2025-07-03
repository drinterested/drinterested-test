"use client"

import type React from "react"
import { useState } from "react"
import { X, ChevronDown, ChevronUp, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import NewsletterForm from "@/components/newsletter-form"

interface ImpactPopupProps {
  isOpen: boolean
  onClose: () => void
}

const translations = {
  en: {
    title: "🎉 Big News!",
    subtitle: "Dr. Interested Semi-Annual Impact Report 2025",
    description:
      "Discover the measurable impact Dr. Interested has made in empowering high school students to explore healthcare careers. See our achievements from January 2025 through June 2025.",
    checkItOut: "Check It Out",
    dontMiss: "Don't want to miss an update?",
    subscribeText: "Subscribe to our email list for the latest healthcare opportunities and updates!",
    close: "Close",
  },
  fr: {
    title: "🎉 Grande Nouvelle!",
    subtitle: "Rapport d'Impact Semestriel 2025 de Dr. Interested",
    description:
      "Découvrez l'impact mesurable que Dr. Interested a eu en permettant aux lycéens d'explorer les carrières de santé. Voyez nos réalisations de janvier 2025 à juin 2025.",
    checkItOut: "Découvrir",
    dontMiss: "Vous ne voulez pas manquer une mise à jour?",
    subscribeText: "Abonnez-vous à notre liste de diffusion pour les dernières opportunités de santé et mises à jour!",
    close: "Fermer",
  },
}

export default function ImpactPopup({ isOpen, onClose }: ImpactPopupProps) {
  const [isNewsletterExpanded, setIsNewsletterExpanded] = useState(false)
  const [language, setLanguage] = useState<"en" | "fr">("en")

  const t = translations[language]

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleImpactReportClick = () => {
    window.open("https://impact2025.drinterested.tech/", "_blank")
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Language Toggle */}
        <div className="absolute top-4 left-4 z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "fr" : "en")}
            className="bg-white/80 hover:bg-white/90 text-[#405862] border border-[#405862]/20 rounded-full px-3 py-1 text-xs font-medium"
          >
            <Globe className="w-3 h-3 mr-1" />
            {language === "en" ? "FR" : "ENG"}
          </Button>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white/90 text-[#405862] transition-colors"
          aria-label={t.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Main Content - Beige Background */}
        <div className="bg-[#f5f1eb] p-8 pt-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#405862] mb-2">{t.title}</h2>
            <h3 className="text-lg font-semibold text-[#405862] mb-4">{t.subtitle}</h3>
            <p className="text-[#405862]/80 text-sm mb-6 leading-relaxed">{t.description}</p>
            <Button
              onClick={handleImpactReportClick}
              className="bg-[#4ecdc4] hover:bg-[#3dbdb5] text-white px-6 py-2.5 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {t.checkItOut}
            </Button>
          </div>
        </div>

        {/* Newsletter Section - Expandable */}
        <div className="bg-[#405862]">
          <button
            onClick={() => setIsNewsletterExpanded(!isNewsletterExpanded)}
            className="w-full p-4 text-white hover:bg-[#4a6570] transition-colors flex items-center justify-between"
          >
            <span className="text-sm font-medium">{t.dontMiss}</span>
            {isNewsletterExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {isNewsletterExpanded && (
            <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
              <p className="text-white/80 text-xs mb-4 text-center">{t.subscribeText}</p>
              <NewsletterForm darkMode={true} compact={true} showFirstName={false} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
