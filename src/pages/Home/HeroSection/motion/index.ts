export const container = {
    show: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: .8
        }
    }
} 

export const motionItem = {
    hidden: {
        opacity: 0,
        scale: 1.05,
        y: 50
    },
    show: {
        opacity: 1,
        scale: 1,
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