function createWebkitPseudoElement(pseudoName: string, properties: any) {
  const pseudoElement = `-webkit-${pseudoName}`;
  return `&::${pseudoElement}{ ${properties} }`;
}

const changePropertyType = (property: any, propertyName: string) => {
  switch (propertyName) {
    case 'border':
      return [property.width, property.style, property.color];
    case 'box-shadow':
      return property;
    default:
      return property;
  }
};

const createValue = (value: any) => {
  if (typeof value === 'object') {
    const values = value.map((val: any) =>
      typeof val === 'number' ? `${val}px` : val,
    );
    const stringifiedValues = values.join(' ');
    return stringifiedValues;
  } else if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
};

function createProperty(property: any) {
  const propertyValues = changePropertyType(property.value, property.property);
  return `${[property.property]}: ${createValue(propertyValues)};`;
}

function createProperties(props: any) {
  return props.map((prop: any) => createProperty(prop)).join('\n');
}

export function generateScrollbarStyles(options: any) {
  if (!options) return null;

  const entries = Object.values(options);
  const styles = entries.map((entry: any) => {
    const props = createProperties(entry.props);

    const pseudoElementWithProps = createWebkitPseudoElement(
      entry.option,
      props,
    );

    return pseudoElementWithProps;
  });
  return styles;
}
