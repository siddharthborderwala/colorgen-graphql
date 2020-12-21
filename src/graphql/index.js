import { gql } from '@apollo/client';

/**
 * add one new color to the db
 */
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

/**
 * update label of existing color in db
 */
export const UPDATE_LABEL = gql`
  mutation UpdateLabel($id: uuid!, $label: String) {
    update_colors_by_pk(pk_columns: { id: $id }, _set: { label: $label }) {
      label
    }
  }
`;

/**
 * delete an existing color from db
 */
export const DELETE_ONE_COLOR = gql`
  mutation DeleteColor($id: uuid!) {
    delete_colors_by_pk(id: $id) {
      label
      code
      id
    }
  }
`;

/**
 * subscribe to colors in db
 */
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
