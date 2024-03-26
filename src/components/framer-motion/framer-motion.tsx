//framer motion navbar variant for navbar
export const navbarVariant = {
    hidden: {
        y: -100,
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 10,
        },
    },
};

//framer motion border variant for navbar

export const borderVariant = {
    hidden: {
        width: 0
    },
    animate: {
        width: '90%',
        transition: {
            delay: 0.5,
            duration: 0.8
        }
    }
}

//framer motion for memoji

export const memojiVariant = {
    hidden: {x: '155%', rotate: '90deg'},
    animate: {
        x: '0%',
        rotate: '0deg',
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 10,
        },
    },
};

//framer motion for container divs combined with item to stagger animation

export const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            delay: 0.5,
        },
    },
};

export const item = {
    hidden: {x: -20, opacity: 0},
    show: {x: 0, opacity: 1},
};


//framer motion animation for project cards
export const projectVariant = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5,
            duration: 0.5,
        },
    },
};