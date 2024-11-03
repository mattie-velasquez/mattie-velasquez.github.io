import next from "next";

export const skills = [
    { name: 'HTML', proficiency: 60, icon: '/SkillsWidget/html5.svg' },
    { name: 'CSS', proficiency: 50, icon: '/SkillsWidget/css3.svg' },
    { name: 'JavaScript', proficiency: 75, icon: '/SkillsWidget/javascript.svg' },
  ];

export const work = [
    {
      logo: '/WorkWidget/ess.png',
      organization: 'ESS',
      jobTitle: 'Substitute Teacher',
      startYear: 2023,
      endYear: 2024,
    },
    {
      logo: '/WorkWidget/upkid.png',
      organization: 'UpKid',
      jobTitle: 'Substitute Teacher',
      startYear: 2022,
      endYear: 2023,
    },
    {
      logo: '/WorkWidget/kotm.png',
      organization: 'Kids on the Move',
      jobTitle: 'Assistant Teacher',
      startYear: 2020,
      endYear: 2022,
    },
    {
      logo: '/WorkWidget/roi solutions.png',
      organization: 'ROI Solutions',
      jobTitle: 'Customer Service Representative',
      startYear: 2020,
      endYear: 2020,
    }
  ];

export const footerLinks = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Projects',
      url: '/projects',
    },
    {
      title: 'Uses',
      url: '/uses',
    },
  ];

export const navOptions = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/uses', label: 'Uses' },
  { path: '/about', label: 'About' },
  ];

export const socialLinks = [
    { icon: '/SocialLinks/github.svg', link: 'https://github.com/tethergirl30' },
    { icon: '/SocialLinks/linkedin.svg', link: 'https://linkedin.com/mattievelasquez' },
 ];
    {/* icon: '/SocialLinks/twitter.svg', link: 'https://twitter.com' */}


export const articleList = [
    {
      date: 'August 4, 2024',
      title: 'Lord, do you remember me?',
      content: 'I love going to the temple. I love the peace that I feel in the temple, and I love being able to sit in reverence.',
      link: '/articles/my-first-article',
    },
    {
      date: 'March 30, 2024',
      title: 'He is already here.',
      content: 'I had this beautiful idea in my head Friday night after my orchestra concert of a meaningful image of the sacrifice and love of our Savior. I spent many hours working on it, wanting to get it right because this idea was too precious not to share.',
      link: '/articles/my-second-article',
    },
  ];

export const workstationList =[
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
]
export const developmentList =[
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
]
export const designList =[
  {
    title: "Whimsical",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Figma",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
]
export const productivityList =[
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
]

export const projectList = [
  {
    logo: "/ProjectCard/blog.png",
    name: "Keeping Christ in Your Heart",
    content: "Uplifting posts from a member of the Church of Jesus Christ of Latter-day Saints.",
    link: "blogspot.com",
  },
  {
    logo: "/ProjectCard/emso.png",
    name: "A Night at the Symphony",
    content: "A digital concert program for the Eagle Mountain Symphony Orchestra.",
    link: "eaglemountainsymphony.org/1",
  },
  {
    logo: "/ProjectCard/emso.png",
    name: "A Night at the Ballet",
    content: "A digital concert program for the Eagle Mountain Symphony Orchestra.",
    link: "eaglemountainsymphony.org/2",
  },
  {
    logo: "/ProjectCard/emso.png",
    name: "A Night at the Opera",
    content: "A digital concert program for the Eagle Mountain Symphony Orchestra.",
    link: "eaglemountainsymphony.org/3",
  },
  {
    logo: "/ProjectCard/emso.png",
    name: "A Night at the Movies",
    content: "A digital concert program for the Eagle Mountain Symphony Orchestra.",
    link: "eaglemountainsymphony.org/4",
  },
];
