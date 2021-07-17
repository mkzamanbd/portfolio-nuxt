<template>
	<div>
		<!-- header -->
		<TopHeader />
		<!-- About my background -->
		<AboutInformation />
		<!-- Portfolios -->
		<Portfolio />
		<!-- Tools -->
		<WorkingTools />
		<!-- working steps -->
		<WorkingProcess />
		<!-- Footer -->
		<BottomFooter />
	</div>
</template>

<script>
export default {
	head(){
		return {
			meta:[
				{
					hid: "keywords",
					name : "keywords",
					content :"Web development, web developer, Laravel, php, Vue js, Nuxt js, React js, Next js, bootstrap, website, kamruzzaman, web design, landing page, interaction design, sketch"
				},
				{
					hid: "description",
					name: "description",
					content: "Transforming idea from designing to client side coding for web, Designing user interface for web & mobile platforms..."
				},
				{
					hid: "author",
					name: "author",
					content: "Kamruzzaman"
				},
				{
					hid: "copyright",
					name: "copyright",
					content: "Kamruzzaman"
				},
				{
					hid:"robots",
					name:"robots",
					content:"index, follow"
				},
				{
					hid: "theme-color",
					name: "theme-color",
					content: "#0180FF"
				},
				{
					hid: "og:title",
					property: "og:title",
					content: "Kamruzzaman | Web & Android Application Developer"
				},
				{
					hid: "og:description",
					property: "og:description",
					content: "Transforming idea from designing to client side coding for web, Designing user interface for web & mobile platforms..."
				},
				{
					hid: "og:image",
					property: "og:image",
					content: require('@/assets/images/zaman.png')
				},
				{
					hid: "og:image:secure_url",
					property: "og:image:secure_url",
					content: require('@/assets/images/zaman.png')
				},
				{
					hid: "og:image:type",
					property: "og:image:type",
					content: "image/png"
				},
				{
					hid: "og:image:width",
					property: "og:image:width",
					content: "420"
				},
				{
					hid: "og:image:height",
					property: "og:image:height",
					content: "280"
				},
				{
					hid: "og:image:alt",
					property: "og:image:alt",
					content: "Zaman, Kamruzzaman"
				}
			]
		}
	}
};
</script>
