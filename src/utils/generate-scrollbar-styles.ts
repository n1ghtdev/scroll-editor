import isNumber from 'is-number';

function createWebkitPseudoElement(pseudoName: string, properties: any) {
  const pseudoElement = `-webkit-${pseudoName}`;

  return `::${pseudoElement}{ ${properties} }`;
}

function changePropertyType(propertyName: string, property: any) {
  switch (propertyName) {
    case 'border':
      return [property.width, property.style, property.color];
    case 'box-shadow':
      return [
        property.inset ? 'inset' : '',
        property.x,
        property.y,
        property.spread,
        property.blur,
        property.color,
      ];
    default:
      return property;
  }
}

function createValue(value: any) {
  if (Array.isArray(value)) {
    const values = value.map((val: any) => (isNumber(val) ? `${val}px` : val));
    const stringifiedValues = values.join(' ');

    return stringifiedValues;
  } else if (isNumber(value)) {
    return `${value}px`;
  }
  return value;
}

function createProperty(property: any) {
  const propertyValues = changePropertyType(property.name, property.value);

  return `${[property.name]}: ${createValue(propertyValues)};`;
}

function createProperties(props: any) {
  return Object.values(props)
    .map((prop: any) => createProperty(prop))
    .join('\n');
}

export function generateScrollbarStyles(options: any) {
  if (!options) return null;

  const scrollClasses = Object.values(options);

  const styles = scrollClasses.map((scrollClass: any) => {
    const props = createProperties(scrollClass.props);

    const pseudoElementWithProps = createWebkitPseudoElement(
      scrollClass.name,
      props,
    );

    return pseudoElementWithProps;
  });

  return styles;
}
