///<reference types="react" />

declare module "app1/App1Layout" {
	import { ComponentType } from "react";
	interface Props {}
	const MicrofrontendOne: ComponentType<Props>
	export default MicrofrontendOne
}

declare module "app1/store";
declare module "app1/CounterButton";

declare module "app1/CounterButton1" {
	import { ComponentType } from "react";
	interface CounterButtonProps {

		greeting : string
		gd : string
	}

	const cb1: ComponentType<CounterButtonProps>;
	export default cb1;
}

declare module "app2/App2Home" {
	import { ComponentType } from "react";
	interface Props {}
	const MicrofrontendTwo: ComponentType<Props>;
	export default MicrofrontendTwo;
}

declare module "app2/App2Content" {
}

declare module "app3/App3Home" {
	import { ComponentType } from "react";
	interface Props {}
	const MicrofrontendTwo: ComponentType<Props>;
	export default MicrofrontendThree
}
