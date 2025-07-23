/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			// transitionProperty: {
			// 	colors: 'background-color,border-color,color,.fill,atroke',
			// },
			fontWeight: {
				regular: 400,
				medium: 500,
			},
 
			colors: {

				primary			:	'var(--color-ux-primary)',
				secondary		:	'var(--color-ux-secondary)',
				info			:	'var(--color-ux-info)',
				success			:	'var(--color-ux-success)',
				warning			:	'var(--color-ux-warning)',
				danger			:	'var(--color-ux-danger)',
				shadow			:	'var(--color-ux-shadow)',
			
				muted			:	'var(--color-ux-muted)',
				accent			:	'var(--color-ux-accent)',
				destructive		:	'var(--color-ux-destructive)',
				transparent		:	'var(--color-ux-transparent)',
			
				white			:	'var(--color-ux-white)',
				black			:	'var(--color-ux-black)',
			
				sky				:	'var(--color-ux-sky)',
				light			:	'var(--color-ux-light)',
				gray			:	'var(--color-ux-gray)',
				dark			:	'var(--color-ux-dark)',
				
				blue			:	'var(--color-ux-blue)',
				darkblue		:	'var(--color-ux-darkblue)',
				yellow			:	'var(--color-ux-yellow)',
				lime			:	'var(--color-ux-lime)',
				green			:	'var(--color-ux-green)',
				darkgreen		:	'var(--color-ux-darkgreen)',
				violet			:	'var(--color-ux-violet)',
				fuxcia			:	'var(--color-ux-fuxcia)',
				orange			:	'var(--color-ux-orange)',
				red				:	'var(--color-ux-red)',
			
				textdark		:	'var(--color-ux-textdark)',
				textmed			:	'var(--color-ux-textmed)',
				textlight		:	'var(--color-ux-textlight)',

			},
		},
	},
	plugins: [],
};
