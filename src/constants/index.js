import {
	mobile,
	engineer,
	web,
	javascript,
	html,
	css,
	reactjs,
	tailwind,
	nodejs,
	mongodb,
	figma,
	git,
	java,
	python,
	threejs,
	flowerstore,
	todolist,
	spaceship,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Software Engineer",
		icon: engineer,
	},
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "Java",
		icon: java,
	},
	{
		name: "Python",
		icon: python,
	},
];

const experiences = [
	{},
];

const testimonials = [
	{},
];

const projects = [
	{
		name: "Flower Store",
		description:
			"Web application that offers a wide variety of flowers for customers to browse, and purchase, offering a delightful and convenient shopping experience.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "bootstrap",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: flowerstore,
		source_code_link: "https://henrikanha.github.io/FlowerStore/",
	},
	{
		name: "Todo List",
		description:
			"A web management platform where users can add, edit, delete, and mark tasks as completed. Designed to help users stay organized and boost productivity with a clean and user-friendly interface.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "localStorage",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: todolist,
		source_code_link: "https://henrikanha.github.io/TodoList/",
	},
	{
		name: "Cho Han & Spaceship",
		description:
			"Two engaging text-based games, 'Cho-Han' and 'Spaceship,' are accessible through a command-line interface. The games utilize a structured game loop and ASCII art to deliver an interactive experience.",
		tags: [
			{
				name: "Java",
				color: "blue-text-gradient",
			},
			{
				name: "OOP",
				color: "green-text-gradient",
			},
			{
				name: "ASCII Art",
				color: "pink-text-gradient",
			},
		],
		image: spaceship,
		source_code_link: "https://github.com/HenrikanHa/ChoHan-and-Spaceship",
	},
];

export { services, technologies, experiences, testimonials, projects };
