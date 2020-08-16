import { DarkThemeColors, LightThemeColors } from './colors'
import { DarkThemeFonts, LightThemeFonts } from './fonts'
import { DarkThemeImages, LightThemeImages } from './images'

export const LightTheme = {
  colors: LightThemeColors,
  fonts: LightThemeFonts,
  images: LightThemeImages
}

export const DarkTheme = {
  ...LightTheme,
  colors: DarkThemeColors,
  fonts: DarkThemeFonts,
  images: DarkThemeImages
}
