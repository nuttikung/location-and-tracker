export type LoginForm = {
	username: string;
	password: string;
};

export enum LoginAction {
	CHANGE_VALUE = "CHANGE_VALUE",
}

export type LoginFormField = keyof LoginForm;

export type LoginDispatch = {
	type: LoginAction.CHANGE_VALUE;
	payload: string;
	field: LoginFormField;
};
