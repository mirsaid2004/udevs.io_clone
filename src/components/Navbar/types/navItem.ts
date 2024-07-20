export type navItem = {
  id: string;
  children?: {
    title?: string;
    style?: string;
    list: { id: string; img: string }[];
  };
};
