export type footerItem = {
  title: string;
  list: { title: string; id: string }[];
};

export const footerItemsList: footerItem[] = [
  {
    title: "about_us",
    list: [
      { title: "footer:services", id: "services" },
      { title: "navbar:command", id: "command" },
      { title: "navbar:tools", id: "tools" },
      { title: "navbar:clients", id: "clients" },
    ],
  },
  {
    title: "footer:services",
    list: [
      { title: "navbar:services_1", id: "services_1" },
      { title: "navbar:services_2", id: "services_2" },
      { title: "navbar:services_3", id: "services_3" },
      { title: "navbar:services_4", id: "services_4" },
      { title: "navbar:services_5", id: "services_5" },
    ],
  },
  {
    title: "portfolio",
    list: [
      { title: "navbar:portfolio_1", id: "portfolio_1" },
      { title: "navbar:portfolio_2", id: "portfolio_2" },
      { title: "navbar:portfolio_3", id: "portfolio_3" },
      { title: "navbar:portfolio_4", id: "portfolio_4" },
    ],
  },
];
