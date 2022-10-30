export const listChatRooms =
  /* Graphql */
  `
  query GetUser($id: ID!) {
    getUser(id: $id)  {
      id
      ChatRooms {
        items {
          chatRoom {
            id
            LastMessage {
              id
              text
              createdAt
            }
            users {
              items {
                user {
                  id
                  image
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
