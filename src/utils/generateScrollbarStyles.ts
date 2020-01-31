import isNumber from "is-number";

function createWebkitPseudoElement(pseudoName: string, properties: any) {
  const pseudoElement = `-webkit-${pseudoName}`;

  return `::${pseudoElement}{ ${properties} }`;
}

function changePropertyType(property: any, propertyName: string) {
  switch (propertyName) {
    case "border":
      return [property.width, property.style, property.color];
    case "box-shadow":
      return [
        property.inset ? "inset" : "",
        property.x,
        property.y,
        property.blur,
        property.spread,
        property.color
      ];
    default:
      return property;
  }
}

function createValue(value: any) {
  if (Array.isArray(value)) {
    const values = value.map((val: any) => (isNumber(val) ? `${val}px` : val));
    const stringifiedValues = values.join(" ");

    return stringifiedValues;
  } else if (isNumber(value)) {
    return `${value}px`;
  }
  return value;
}

function createProperty(property: any) {
  const propertyValues = changePropertyType(property.value, property.property);

  return `${[property.property]}: ${createValue(propertyValues)};`;
}

function createProperties(props: any) {
  return props.map((prop: any) => createProperty(prop)).join("\n");
}

export function generateScrollbarStyles(options: any) {
  if (!options) return null;

  const entries = Object.values(options);
  const styles = entries.map((entry: any) => {
    const props = createProperties(entry.props);

    const pseudoElementWithProps = createWebkitPseudoElement(
      entry.option,
      props
    );

    return pseudoElementWithProps;
  });
  return styles;
}
