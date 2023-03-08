
export const container = {
    show: {
        transition: {
            staggerChildren: 0.3,
            delayChildren: .1
        }
    }
} 

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
    start: {
        
    },
    finish: {

    }

}