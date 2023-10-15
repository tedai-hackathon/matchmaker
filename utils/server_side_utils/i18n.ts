import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps, GetStaticPropsContext } from 'next'

export const getStaticPropsWithTranslations = (namespaces: string[]): GetStaticProps => {
  return async (context: GetStaticPropsContext) => {
    const translations = await serverSideTranslations(context.locale ?? 'en', namespaces)
    return {
      props: {
        ...translations,
      },
    }
  }
}