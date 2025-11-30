import type { LocaleObject } from '@nuxtjs/i18n'

type MutableLocale = Omit<LocaleObject, 'code'> & { code: string }

const locales: MutableLocale[] = [
  {
    code: 'en-US',
    file: 'en-US.json',
    name: 'English',
    emoji: '🇺🇸',
  },
  {
    code: 'zh-CN',
    file: 'zh-CN.json',
    name: '简体中文',
    emoji: '🇨🇳',
  },
  {
    code: 'zh-TW',
    file: 'zh-TW.json',
    name: '繁體中文',
    emoji: '🇹🇼',
  },
  {
    code: 'fr-FR',
    file: 'fr-FR.json',
    name: 'Français',
    emoji: '🇫🇷',
  },
  {
    code: 'vi-VN',
    file: 'vi-VN.json',
    name: 'Tiếng Việt',
    emoji: '🇻🇳',
  },
  {
    code: 'de-DE',
    file: 'de-DE.json',
    name: 'Deutsch',
    emoji: '🇩🇪',
  },
  {
    code: 'tr-TR',
    file: 'tr-TR.json',
    name: 'Türkçe',
    emoji: '🇹🇷',
  },
]

function buildLocales() {
  const useLocales = Object.values(locales).reduce((acc, data) => {
    acc.push(data)
    return acc
  }, <MutableLocale[]>[])
  return useLocales.sort((a, b) => a.code.localeCompare(b.code)) as LocaleObject[]
}

export const currentLocales = buildLocales()
