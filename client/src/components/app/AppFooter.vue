<template>
	<div class="app-footer">
		<div class="app-footer__copyright container">
			<p>{{ `© ${new Date().getFullYear()} «Alisa web»` }}</p>
			<a href="https://github.com/bondrogeen/alisa-web" target="blank"><i class="icon icon-github"></i></a>
		</div>
	</div>
</template>

<style lang="scss">
.app-footer {
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background-color: color('app', 'primary');
	&__copyright {
		color: color('app', 'white');
		display: flex;
		align-items: center;
		justify-content: space-between;
		a {
			color: color('app', 'white');
		}
		.icon-github {
			font-size: 22px;
			cursor: pointer;
		}
	}
}
</style>
