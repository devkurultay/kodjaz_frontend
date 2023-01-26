/* Local dependencies */
import { getRequest } from './axois-api';

export async function getSubscriptions(token: string) {
  const response = await getRequest(token, 'v1/user/subscriptions');

  return response;
}

const subscriptionsService = {
  getSubscriptions,
};

export default subscriptionsService;
