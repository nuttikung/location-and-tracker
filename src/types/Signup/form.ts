export type SignupForm = {
	username: string;
	email: string;
	password: string;
};

export enum SignupAction {
	CHANGE_VALUE = "CHANGE_VALUE",
}

export type SignupFormField = keyof SignupForm;

export type SignupDispatch = {
	type: SignupAction.CHANGE_VALUE;
	payload: string;
	field: SignupFormField;
};
