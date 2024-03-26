export const navbarLinks = [
    {
        name: "Home",
        link: location.pathname.includes('/project') ? '/' : '#home'
    },
    {
        name: "Projects",
        link: location.pathname.includes('/project') ? '/' : '#projects'
    },
    {
        name: "Contact",
        link: location.pathname.includes('/project') ? '/' : '#contact'
    },
];