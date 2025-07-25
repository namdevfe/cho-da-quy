import { theme as antdTheme } from 'antd'
import type { ThemeConfig } from 'antd/es/config-provider/context'

export const lightTheme: ThemeConfig = {
  algorithm: antdTheme.defaultAlgorithm,
  token: {
    fontFamily: 'var(--font-inter)'
    // colorPrimary: '#0F1C4D', // Deep Sapphire Blue
    // colorLink: '#0F1C4D',
    // colorBgBase: '#ffffff', // White background
    // colorTextBase: '#1a1a1a', // Dark text for readability
    // colorBorder: '#d9d9d9' // Light grey borders
  }
}

export const darkTheme: ThemeConfig = {
  algorithm: antdTheme.darkAlgorithm,
  token: {
    fontFamily: 'var(--font-inter)'
    // colorPrimary: '#50C878', // Emerald green as primary in dark mode
    // colorLink: '#50C878',
    // colorBgBase: '#141414', // Default AntD dark background
    // colorTextBase: '#e6f7ff', // Light bluish text for readability
    // colorBorder: '#434343' // Dark grey borders
  }
}
