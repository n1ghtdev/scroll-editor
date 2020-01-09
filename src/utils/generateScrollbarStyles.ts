function createWebkitPseudoElement(pseudoName: string, properties: any) {
  const pseudoElement = `-webkit-${pseudoName}`;
  return `&::${pseudoElement}{ ${properties} }`;
}

function createProperty(property: any) {
  // TODO: checking if number for px is kinda bad atleast it is bad to do it
  // in this function/s
  return `${[property.property]}: ${property.value}${
    typeof property.value === 'number' ? 'px' : ''
  };`;
}

function createProperties(props: any) {
  return props.map((prop: any) => createProperty(prop)).join('\n');
}

export function generateScrollbarStyles(options: any) {
  if (!options) return null;

  const entries = Object.values(options);
  const styles = entries.map((entry: any) => {
    const props = createProperties(entry.props);
    console.log(props);

    const pseudoElementWithProps = createWebkitPseudoElement(
      entry.option,
      props,
    );

    return pseudoElementWithProps;
  });
  return styles;
}
