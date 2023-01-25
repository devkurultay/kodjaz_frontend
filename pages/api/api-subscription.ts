/* Local dependencies */
import { SubscriptionsTypes } from '../../types/subscriptionsTypes';
import { getRequest } from './axois-api';

export async function getSubscriptions() {
  const response = await getRequest('v1/user/subscriptions');

  return response;
}

const subscriptionsService = {
  getSubscriptions,
};

export default subscriptionsService;
