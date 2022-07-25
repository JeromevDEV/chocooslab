import emoji from "react-easy-emoji";

export const greetings = {
	name: "Chocoo's Lab",
	title: "Hi all, I'm ChocooPanda / ChocooCrypto / RedAngelD",
	description:
		"I'm passionate web developer having an experience of web applications with React.js, Vue.js, Next.js and Blockchain development on Web3.js and Solana. I'm" +
		" also a Collab Manager, WL Hunter and a Copywritter, wich means I can easily help you to get some WL spots for your community and some attractive Twitter posts." +
		" I recently learned how to create and setup Discord servers for NFT projects, with all the bots and security needed.",
	resumeLink:
		"",
};

export const openSource = {
	githubUserName: "JeromevDEV\n",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/",
	instagram: "https://www.instagram.com/",
	twitter: "https://twitter.com/RedangelD",
	github: "https://github.com/JeromevDEV",
	linkedin: "https://www.linkedin.com/in//",
	discord: "https://discord.gg/4tpQZyksRX",
};

export const skillsSection = {
	title: "What can I do",
	subTitle:
		//"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	    "",
	data: [
		{
			title: "Blockchain",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in WL Hunting for Solana blockchain, successfully negotiated tons of spots for different communities."
				),
				emoji(
					"⚡ Experience as Collab Manager for different projects, managed to set up beneficial collaborations."
				),
				emoji(
					"⚡ Generating Solana NFTs collection given layers and rarity."
				),
				emoji(
					"⚡ Experience as Copywriter for different projects, created and produced relevant and beneficial posts."
				),
				emoji(
					"⚡ Experience in creating and setting up Discord servers."
				),
			],
			softwareSkills: [
				{
					skillName: "Solana",
					fontAwesomeClassname: "cryptocurrency:sol",
				},
				{
					skillName: "Web3js",
					fontAwesomeClassname: "logos:web3js",
				},
				{
					skillName: "Discord",
					fontAwesomeClassname: "logos:discord",
				},
				{
					skillName: "NFT",
					fontAwesomeClassname: "maki:art-gallery",
				},
			],
		},
		{
			title: "Front End Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building Singe-Page-Apps in Vue.js"),
				emoji("⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"),

			],
			softwareSkills: [
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Vuejs",
					fontAwesomeClassname: "vscode-icons:file-type-vue",
				},
				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
			],
		},
	/*	{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Sentry",
					fontAwesomeClassname: "logos:sentry-icon",
				},
			],
		},*/

	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Collab Manager",
		progressPercentage: "100",
	},
	{
		Stack: "WL Hunter",
		progressPercentage: "100",
	},
	{
		Stack: "Copywriter",
		progressPercentage: "85",
	},
];

export const educationInfo = [
	{
		schoolName: "Harvard University",
		subHeader: "Master of Science in Computer Science",
		duration: "September 2017 - April 2019",
		desc: "Participated in the research of XXX and published 3 papers.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
];

export const experience = [
	{
		role: "MOD",
		company: "The Alpha Squad",
		companylogo: "/img/icons/common/alphasquad.jpg",
		twitter: "https://twitter.com/AlphaSquad_NFT",
		date: "August 2021 – ...",
		desc: "I'm a MOD for The Alpha Squad since August 2021. I ensured pre-mint task as moderating the chat, creating activities and building hype. I successfully proposed relevant ideas which ended up beneficial for the project. \n"
	},
	{
		role: "WL Hunter / Front End Dev / MOD",
		company: "Degen Bounty Hunter",
		companylogo: "/img/icons/common/dbh_logo.jpg",
		twitter: "https://twitter.com/DegenHunterSOL",
		date: "October 2021 - ...",
		desc: "Started as a Front End Developer for Degen Bounty Hunter. I created and deployed the official website. I then also worked as a MOD, ensuring the chat was going well and the hype was building up." +
			"I then became a WL Hunter, where I offered over 800 spots for different project to the DBH's community, generating over 2000 $SOL theoretical benefits.",
	},
	{
		role: "Copywriter",
		company: "The Diggers / Mireille DAO",
		companylogo: "/img/icons/common/gg.jpg",
		twitter: "https://twitter.com/TheDiggersDAO",
		date: "January 2021 - ...",
		desc: "Joined this community at the beginning of 2021, I quickly wanted to be part of it. I started with redacting some threads about different projects like Trippin Ape Tribe." +
			"I then created a little thread about the basis to know when you start your journey in the NFT world which was a success and helped many new comers. I also update a channel " +
			"with the latest WL Submission to ensure everyone reminds to submit their wallet for different projects.",
	},
	{
		role: "CEO",
		company: "Chocoo's Lab",
		companylogo: "/img/icons/common/chocoolab.png",
		twitter: "https://discord.gg/r8nv2beVVK",
		date: "July 2022 - ...",
		desc: "After 2 years in the crypto/NFT world I decided it was my time to build. I started Chocoo's Lab, a Discord where you can find all my services and their prices, my latest threads and creation." +
			"I'm also planning on creating a new Solana collection but I won't leak it here since it's only at the ideation state right now.",
	},
];

export const projects = [
	{
		name: "AtlasMart",
		desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
		link: "https://atlasmart.netlify.app/",
	},
	{
		name: "Technota (Forum)",
		desc: "Get hands-on experience in technical skills with Technota",
		link: "https://technota.netlify.app/",
	},
	{
		name: "Shopaza (Ecommerce)",
		desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
		link: "https://shopaza.herokuapp.com/",
	},
	{
		name: "MMFmelody (Blog)",
		desc: "Here you will find amazing tips about health, beauty, and modern-day life.",
		// github: "https://github.com/1hanzla100",
		link: "https://mmfmelody.herokuapp.com/",
	},
	{
		name: "Developer-Portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/JeromevDEV/chocooslab",
		link: "https://chocooslab.vercel.app/",
	},
];

export const feedbacks = [
	{
		name: "DoubleDCH (Degen Bounty Hunter)",
		twitter: "https://twitter.com/DegenHunterSOL",
		feedback:
			"I first hired ChocooPanda as Front End Developer. He did an excellent job and was always available to update it. I then hired him as a MOD and WL Hunter, where he" +
			" really provided hard work and guaranteed our community never missed anything. We got some WL spots for some awesome projects which generated more than 10SOL benefits per WL! 10/10 would recommend !",
		pfp: "/img/icons/common/doubledch.jpg",
	},
	{
		name: "Akaba (The Alpha Squad)",
		twitter: "https://twitter.com/AlphaSquad_NFT",
		feedback:
			"ChocooPanda joined us as a MOD before our mint phase. He ensured our chat was active with some fun games like Smash Kart, Trivia or Lolbeans. He provided some " +
			"outbreaking ideas after the mint phase to ensure activity in our community. I'd recommend ChocooPanda to any project in need of a MOD !",
		pfp: "/img/icons/common/akaba.png",
	}
];
