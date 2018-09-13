import { getCredentialsFromPermissions } from '../../utils';
import { computeMetrics, getPlanFromTier, getApiCalls } from '../helpers';

export const computeAppPlanState = ({ payload }) => {
	const isBootstrapMonthly = payload.tier === 'bootstrap-monthly';
	const isBootstrapAnnual = payload.tier === 'bootstrap-annual';
	const isGrowthMonthly = payload.tier === 'growth-monthly';
	const isGrowthAnnual = payload.tier === 'growth-annual';

	return {
		isBootstrapMonthly,
		isBootstrapAnnual,
		isGrowthMonthly,
		isGrowthAnnual,
		isBootstrap: isBootstrapMonthly || isBootstrapAnnual,
		isGrowth: isGrowthMonthly || isGrowthAnnual,
		isPaid: isBootstrapMonthly || isBootstrapAnnual || isGrowthMonthly || isGrowthAnnual,
		plan: getPlanFromTier(payload.tier),
	};
};

export const computeAppMappingState = (action, state) => ({
	results: Object.assign({}, state.results, {
		[action.meta.appName]: {
			...action.payload,
			computedMetrics: computeMetrics(action.payload),
			totalApiCalls: getApiCalls(action.payload),
		},
	}),
});

export const computeAppAnalyticsState = (action, state) => ({
	results: Object.assign({}, state.results, {
		[action.meta.appName]: action.payload,
	}),
});

export const computeAppPermissionState = ({ payload }) => ({
	credentials: getCredentialsFromPermissions(payload),
});
