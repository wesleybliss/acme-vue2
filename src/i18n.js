/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueI18n from 'vue-i18n'

const locales = ['en', 'fr']
const fallbackLocale = locales[0]
const defaultLocale = locales.indexOf(navigator.language > -1)
    ? navigator.language
    : fallbackLocale

let messages = {}

locales.forEach(locale => {
    messages[locale] = require(`locales/${locale}.yml`)
})

export default new VueI18n({
    locale: defaultLocale,
    fallbackLocale
})