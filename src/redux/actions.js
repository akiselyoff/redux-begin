export const myAction = {
  type: 'My_type_action',
  myPayload: 'My_payload_value',
};

export const myAction_2 = {
  type: 'My_type_action_2',
  myPayload: 'My_payload_value_2',
};

export const myActionCreator = value => {
  return {
    type: 'My_type_action',
    myPayload: value,
  };
};
