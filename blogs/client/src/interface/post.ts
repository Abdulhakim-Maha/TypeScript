export type POST = {
  _id: string;
  title: string;
  photo: string;
  desc: string;
  username: string;
  categories: { name: string }[];
  createdAt: string;
  updatedAt: string;
};
