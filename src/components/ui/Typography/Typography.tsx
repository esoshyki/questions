import { TypographyHOCProps } from './types';

const TypographyHOC = ({component, styles = {}, children} : TypographyHOCProps ) =>{

  const Component = component;

  return (
    <Component style={styles}>
      {children}
    </Component>
  )
};

export default TypographyHOC;