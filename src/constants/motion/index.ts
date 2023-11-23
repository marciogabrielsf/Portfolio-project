import { Variants } from "framer-motion";

export const container: Variants = {
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			when: "beforeChildren",
		},
	},
};

export const motionItem: Variants = {
	hidden: {
		opacity: 0,
		y: -50,
	},
	show: {
		opacity: 1.0,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 50,
		},
	},
	exit: {
		opacity: 0,
		y: -50,
		transition: {
			type: "spring",
			stiffness: 50,
		},
	},
};

export const leftToRightItem: Variants = {
	hidden: {
		opacity: 0,
		x: -50,
	},
	show: {
		opacity: 1.0,
		x: 0,
		transition: {
			type: "spring",
			stiffness: 50,
		},
	},
	exit: {
		opacity: 0,
		x: -50,
		transition: {
			bounce: 0,
		},
	},
};
