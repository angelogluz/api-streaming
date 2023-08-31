import { ResourceOptions } from "adminjs";

export const categoryResourseOptions: ResourceOptions = {
  navigation: "Catálogo",
  editProperties: ["name", "position"],
  filterProperties: ["name", "position", "createdAt", "updateAt"],
  listProperties: ["id", "name", "position"],
  showProperties: ["name", "position", "createdAt", "updateAt"],
};
