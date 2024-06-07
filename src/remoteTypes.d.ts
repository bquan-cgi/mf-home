///<reference types="react" />

declare module "app1/App1Layout" {
	import { ComponentType } from "react";
	interface Props {}
	const MicrofrontendOne: ComponentType<Props>
	export default MicrofrontendOne
}

declare module "app3/App2Home" {
	import { ComponentType } from "react";
	interface Props {}
	const MicrofrontendTwo: ComponentType<Props>;
	export default MicrofrontendTwo;
}

declare module "app3/App3Home" {
	import { ComponentType } from "react";
	interface Props {}
	const MicrofrontendTwo: ComponentType<Props>;
	export default MicrofrontendThree
}
