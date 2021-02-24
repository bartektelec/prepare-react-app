export default {
	increment(step) {
		return {
			type: 'INCREMENT',
			payload: step || 1,
		};
	},
};
