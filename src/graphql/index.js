import { gql } from '@apollo/client';

export const ADD_ONE_COLOR = gql`
  mutation AddColor($label: String!, $code: String!) {
    insert_colors_one(object: { label: $label, code: $code }) {
      label
      code
      id
      created_at
    }
  }
`;

export const UPDATE_LABEL = gql`
  mutation UpdateLabel($id: uuid!, $label: String) {
    update_colors_by_pk(pk_columns: { id: $id }, _set: { label: $label }) {
      label
    }
  }
`;

export const DELETE_ONE_COLOR = gql`
  mutation DeleteColor($id: uuid!) {
    delete_colors_by_pk(id: $id) {
      label
      code
      id
    }
  }
`;

export const COLORS_SUBSCRIPTION = gql`
  subscription ObserveColors {
    colors {
      id
      label
      code
      created_at
    }
  }
`;
