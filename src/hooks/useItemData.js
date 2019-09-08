import { useStaticQuery, graphql } from "gatsby";

export const useItemData = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allItemsJson {
          nodes {
            id
            name
            updated_at
            size
            owner
            is_starred
            in_trash
            parent_folder_id
          }
        }
      }
    `
  );

  return data.allItemsJson.nodes;
};
