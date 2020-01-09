/** @jsx jsx */
import { Form, Collapse } from 'antd';
import { css, jsx } from '@emotion/core';

import OptionItem from './OptionItem';
import AddPropertyForm from './AddPropertyForm';
import OptionsPropertyItem from './OptionsPropertyItem';

import {
  OptionProperty,
  ActionPayloadWithProperty,
} from '../modules/scrollOptions/types';

import {
  updatePropertyAction,
  addPropertyAction,
} from '../modules/scrollOptions/actions';

const OptionsForm = ({
  state,
  dispatch,
}: {
  state: OptionProperty;
  dispatch: any;
}) => {
  const updateProperty = (id: number, value: string) =>
    dispatch(
      updatePropertyAction(state.option, {
        id,
        value,
      }),
    );
  const addProperty = (payload: ActionPayloadWithProperty) => {
    dispatch(addPropertyAction(state.option, payload));
  };
  const submitAddProperty = (values: any) => {
    addProperty({
      id: generateID(),
      ...values,
    });
  };
  // TODO: provide func arg for props instead of accessing from closure
  const generateID = () => {
    const lastProperty = state.props[state.props.length - 1].id;
    return lastProperty + 1;
  };
  return (
    <OptionItem>
      <Collapse
        bordered={false}
        css={css`
          .ant-collapse-header {
            padding: 6px 16px !important;
            padding-left: 40px !important;
          }
        `}
      >
        {state.props.map((prop: any) => (
          <Collapse.Panel
            header={prop.property}
            key={prop.id}
            css={css`
              text-transform: uppercase;
              font-size: 12px;
            `}
          >
            <OptionsPropertyItem property={prop} onChange={updateProperty} />
          </Collapse.Panel>
        ))}
      </Collapse>
      <AddPropertyForm
        optionName={state.option}
        activeProperties={state.props.map(prop => prop.property)}
        onSubmit={(values: any) => submitAddProperty(values)}
      />
    </OptionItem>
  );
};

export default OptionsForm;
