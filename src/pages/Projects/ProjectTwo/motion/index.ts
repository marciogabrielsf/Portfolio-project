export const motionItem = {
    hidden: {
        opacity: 0,
        x: -50
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring", stiffness: 50,
        }
    },
    imageHide:{
        opacity: 0,
        x: 50,
        transition: {
            type: "spring", stiffness: 50,
        }
    },
    imageShow:{
        opacity: 1,
        x: 0,
        transition: {
            type: "spring", stiffness: 50,
        }
    },
}