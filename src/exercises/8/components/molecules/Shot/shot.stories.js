import React from "react";
import { Shot } from "./";
import docsPage from "./shot.mdx";

export default {
  title: "Shot",
  parameters: {
    docs: { page: docsPage }
  }
};

export const simple = () => (
  <>
    <Shot
      name="Guille"
      avatarImage="https://cdn.dribbble.com/users/927565/avatars/normal/871881bb1267479631c106f2985c93b9.jpg"
    />
  </>
);
