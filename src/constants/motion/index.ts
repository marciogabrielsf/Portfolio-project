export const container = {
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: .5
        }
    }
} 

export const motionItem = {
    hidden: {
        opacity: 0,
        y: -50
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring", stiffness: 50,
        }
    },
    exit: {
        opacity: 0,
        y: -50,
        transition:{
            ease: 'easeInOut',
            duration: 2
        }
    }

}