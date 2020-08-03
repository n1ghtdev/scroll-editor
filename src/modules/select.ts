import { ScrollItem, ScrollProperty, State } from './types';

export function selectActiveProperties(state: State) {
  return Object.values(state).map((scrollItem: ScrollItem) => {
    const activeProps = Object.values(scrollItem.props).filter(
      (prop: ScrollProperty) => prop.active,
    );
    return {
      ...scrollItem,
      props: activeProps,
    };
  });
}
