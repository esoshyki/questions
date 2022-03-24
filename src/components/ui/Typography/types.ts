import { ReactNode } from 'react'
import CSS from 'csstype'

export interface TypographyProps {
  styles?: CSS.Properties
  children: ReactNode
}

export interface TypographyHOCProps extends TypographyProps {
  component: "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span",
}