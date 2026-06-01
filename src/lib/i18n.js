import i18n from 'i18next'
import fr from './i18n/fr.json'
import en from './i18n/en.json'

i18n.init({
  lng: 'fr',
  fallbackLng: 'fr',
  resources: {
    fr: { translation: fr },
    en: { translation: en }
  }
})

export default i18n