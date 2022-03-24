import { TypographyProps } from "./types"
import TypographyHOC from "./Typography"

const Typography = {
  H1: (props : TypographyProps) => TypographyHOC({ component: "h1", ...props}),
  H2: (props : TypographyProps) => TypographyHOC({ component: "h2", ...props}),
  H3: (props : TypographyProps) => TypographyHOC({ component: "h3", ...props}),
  H4: (props : TypographyProps) => TypographyHOC({ component: "h4", ...props}),
  H5: (props : TypographyProps) => TypographyHOC({ component: "h5", ...props}),
  H6: (props : TypographyProps) => TypographyHOC({ component: "h6", ...props}),
  SPAN: (props : TypographyProps) => TypographyHOC({ component: "span", ...props}),
  P: (props : TypographyProps) => TypographyHOC({ component: "p", ...props}),
};

export default Typography;