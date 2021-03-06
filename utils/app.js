import { ACC_API } from './index';
import {
 doDelete, doPatch, doGet, doPost,
} from './requestService';

export const getPermission = appId => new Promise((resolve, reject) => {
		fetch(`${ACC_API}/app/${appId}/permissions`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(data => resolve(data.body))
			.catch(error => reject(error));
	});

export const getAppInfo = appId => doGet(`${ACC_API}/app/${appId}`);

export const updatePermission = (appId, username, info) => doPatch(`${ACC_API}/app/${appId}/permission/${username}`, info);

export const newPermission = (appId, info) => new Promise((resolve, reject) => {
		fetch(`${ACC_API}/app/${appId}/permissions`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(info),
		})
			.then(res => res.json())
			.then(data => resolve(data))
			.catch(error => reject(error));
	});

export const deletePermission = (appId, username) => new Promise((resolve, reject) => {
		fetch(`${ACC_API}/app/${appId}/permission/${username}`, {
			method: 'DELETE',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(data => resolve(data))
			.catch(error => reject(error));
	});

export const deleteApp = appId => doDelete(`${ACC_API}/app/${appId}`);

export const getShare = appId => doGet(`${ACC_API}/app/${appId}/share`);

export const createShare = (appId, payload) => doPost(`${ACC_API}/app/${appId}/share`, payload);

export const getAppPlan = appName => doGet(`${ACC_API}/app/${appName}/plan`);

export const createSubscription = (token, plan, appName) => new Promise((resolve, reject) => {
		fetch(`${ACC_API}/app/${appName}/subscription`, {
			headers: {
				'content-type': 'application/json',
			},
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify({ token, plan }),
		})
			.then(res => res.json())
			.then(data => resolve(data.body))
			.catch(error => reject(error));
	});

export const deleteSubscription = appName => new Promise((resolve, reject) => {
		fetch(`${ACC_API}/app/${appName}/subscription`, {
			headers: {
				'content-type': 'application/json',
			},
			method: 'DELETE',
			credentials: 'include',
		})
			.then(res => res.json())
			.then(data => resolve(data.body))
			.catch(error => reject(error));
	});

export const getAppMetrics = appId => new Promise((resolve, reject) => {
		fetch(`${ACC_API}/app/${appId}/metrics`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(data => resolve(data.body))
			.catch(error => reject(error));
	});
