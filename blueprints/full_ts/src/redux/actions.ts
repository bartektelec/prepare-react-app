export default {
	increment(step?: number) {
		return {
			type: 'INCREMENT',
			payload: step || 1,
		};
	},
};
