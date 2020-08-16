import { gql } from 'apollo-server-express';

/**
 * Site schema
 */
const SiteSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type Site {
    id: ID!
    user: ID
    url: String
  }

  # ---------------------------------------------------------
  # Input Objects
  # ---------------------------------------------------------
  input CreateSiteInput {
    userId: ID!
    url: String
  }

  input DeleteSiteInput {
    id: ID!
  }

  # ---------------------------------------------------------
  # Return Payloads
  # ---------------------------------------------------------
  type SitePayload {
    id: ID!
    user: UserPayload
    url: String
  }

  # ---------------------------------------------------------
  # Mutations
  # ---------------------------------------------------------
  extend type Mutation {
    # Creates a site for post
    createSite(input: CreateSiteInput!): Site

    # Deletes a post site
    deleteSite(input: DeleteSiteInput!): Site
  }
`;

export default SiteSchema;
