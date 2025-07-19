import { link } from "fs";
import { href } from "react-router-dom";

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
		title: "UI/UX Designer",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "App Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];
const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "wix",
		icon: "/tech/wix.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
		title: "Wix website Designer",
		company_name: "Freelancer at Fiverr",
		icon: "/company/fiverr.webp",
		iconBg: "#383E56",
		date: "2022 -  2025",
		points: 
		[
            "Experienced Freelancer: 4 years of expertise in Wix website design and redesign on Fiverr, serving clients across various industries.",
            "Wix Specialist: Deep understanding of Wix’s features and tools to create stunning, customized, and fully functional websites.",
            "Client-Centered Collaboration: Strong attention to detail, clear communication, and a commitment to exceeding client expectations.",
            "Proven Success: Delivered high-quality work with consistent 5-star reviews and repeat business through visually appealing websites that bring client visions to life."
		],
	}
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"Instagram is a visual-based social media platform by Meta for sharing photos, videos, and stories.",
		name: "Zain Ahmed",
		image: "/socialmedia/instagram.svg",
		link: "https://www.instagram.com/oozain__o?igsh=MXQ0cXFmc3g3bW04Zg==",
	},
	{
		id: 2,
		testimonial:
			"LinkedIn is a professional networking platform by Microsoft for careers, jobs, and business connections.",
		name: "Zain Ahmed",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/om-patel-401068143/",
	},
	{
		id: 3,
		testimonial:
			"Fiverr is an online marketplace for freelancers to offer services across various categories like design, writing, and programming.",
		name: "Zain Ahmed",
		image: "/socialmedia/fiverr.svg",
		link: "https://www.fiverr.com/s/99W6KkA",
	},
	{
		id: 4,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Zain Ahmed",
		image: "/tech/github.webp",
		link: "https://github.com/ZainAhmed9",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Wix" | "Wordpress" | "Vercel" | "Web"
}[] = [
	{
		name: "Dungeon Athletic Performance",
		description:
			"A Designed and developed a visually appealing and user-friendly fitness website using Wix.",
		tags: [
			{
				name: "Wix Editor",
				color: "blue-text-gradient",
			},
			{
				name: "google-translate",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/DAP.webp",
		platform: "Wix",
		deploy_link: "https://www.dungeonathleticperformance.com/",
	},
	{
		name: "Full-Stack-Finance",
		description:
			"Developed and deployed a professional finance service website for Full Stack Finance using the Wix platform, highlighting their end-to-end accounting, HR, and CFO solutions for startups and growing businesses.",
		tags: [
			{
				name: "Wix",
				color: "blue-text-gradient",
			},
			{
				name: "Wix Studio",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/fullstack.png",
		platform: "Wix",
		deploy_link: "https://www.full-stack-finance.com/",
	},
	{
		name: "FC Construction",
		description:
			" Developed and deployed a modern, client-focused Wix website for FC Construction, highlighting their premium home renovation services across the GTA with a strong visual portfolio and service sections.",
		tags: [
			{
				name: "Wix",
				color: "blue-text-gradient",
			},
			{
				name: "Wix Editor",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/fcconstruction.png",
		platform: "Wix",
		deploy_link: "https://www.fcconstruction.ca/",
	},
	{
		name: "RedBasket",
		description:
			"RedBasket is a fully responsive eCommerce website for selling fresh and organic grocery products online. Developed using React and Vite, it includes dynamic product listings, cart management with localStorage, smooth navigation, and a multi-step checkout experience.",
		tags: [
			{
				name: "React",
				color: "green-text-gradient",
			},
			{
				name: "Vite",
				color: "blue-text-gradient",
			},
			{
				name: "Node",
				color: "orange-text-gradient",
			},
			{
				name: "Vercel",
				color: "pink-text-gradient",
			},
			
		],
		image: "/projectimg/redbasket.png",
		source_code_link: "https://github.com/ZainAhmed9/RedBasket---Organic-Grocery-Store-React-Vite-",
		platform: "Web",
		deploy_link: "https://red-basket-organic-grocery-store-react-vite-4fz87ez80.vercel.app/",
	},
	
];

export { services, technologies, experiences, testimonials, projects };
