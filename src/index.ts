const EVENTS_PREFIX = "MF-CQRS_";

export function handleEvent<PropsType>(
	eventName: string,
	callback: (props: PropsType) => void
) {
	return window.addEventListener(`${EVENTS_PREFIX}${eventName}`, ((
		event: CustomEvent<PropsType>
	) => callback(event.detail)) as EventListener);
}

export function invokeEvent(eventName: string, props?: Object) {
	const event = new CustomEvent(`${EVENTS_PREFIX}${eventName}`, {
		detail: props,
	});

	window.dispatchEvent(event);
}
