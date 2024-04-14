import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './toggleSwitch.css'
export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const { language } = i18n
  // const { language } = i18n
  const [isEnglishLanguageSelected, setIsEnglishLanguageSelected] = useState(
    language === 'en',
  )
  const handleChangeLanguage = useCallback(
    (lng?: 'pt' | 'en') => {
      setIsEnglishLanguageSelected(!isEnglishLanguageSelected)
      i18n.changeLanguage(lng)
    },
    [i18n, isEnglishLanguageSelected],
  )
  return (
    <div className="absolute left-1/2 top-5 flex items-center gap-6 text-lg font-semibold text-white">
      <label className="switch">
        <input
          onChange={
            isEnglishLanguageSelected
              ? () => handleChangeLanguage('pt')
              : () => handleChangeLanguage('en')
          }
          type="checkbox"
          checked={isEnglishLanguageSelected}
        />
        <span className="checkbox-slider round"></span>
      </label>
    </div>
  )
}
