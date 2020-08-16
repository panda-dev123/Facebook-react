import { gql } from 'apollo-server-express';

/**
 * Interest schema
 */
const InterestSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type Interest {
    id: ID!
    user: ID
    name: String
  }

  # ---------------------------------------------------------
  # Input Objects
  # ---------------------------------------------------------
  input CreateInterestInput {
    userId: ID!
    name: String
  }

  input DeleteInterestInput {
    id: ID!
  }

  # ---------------------------------------------------------
  # Return Payloads
  # ---------------------------------------------------------
  type InterestPayload {
    id: ID!
    user: UserPayload
  }

  # ---------------------------------------------------------
  # Mutations
  # ---------------------------------------------------------
  extend type Mutation {
    # Creates a intrest for post
    createInterest(input: CreateInterestInput!): Interest

    # Deletes a post interest
    deleteInterest(input: DeleteInterestInput!): Interest
  }
`;

export default InterestSchema;
