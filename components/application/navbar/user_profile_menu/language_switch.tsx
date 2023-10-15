// language_switch.tsx
import { useRouter } from 'next/router'
import { i18n } from 'next-i18next'

const LanguageSwitch = () => {
  const router = useRouter()
  const { locales, locale: activeLocale } = router
  
  const handleLocaleChange = async (locale: string) => {
    const currentPath = router.asPath;
    const { defaultLocale } = router;
    const basePath = locale === defaultLocale ? '' : `/${locale}`;

    // update the locale for next-i18next
    i18n?.changeLanguage(locale); // safe call with optional chaining

    // update the locale in Next.js router
    await router.push(currentPath, `${basePath}${currentPath}`, { locale: false });
}


  return (
    <div className="flex flex-wrap">
      {locales?.map((locale) => (
        <button 
          key={locale} 
          onClick={() => handleLocaleChange(locale)}
          disabled={locale === activeLocale}
          className="m-1 p-1 text-xs border rounded bg-blue-500 text-white"
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitch
