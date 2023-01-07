export const colors = ['#1200DD', '#69B8FF', '#D73A49', '#28A745', '#FF9E2D', '#7C28EA', '#FFD33D', '#019999'];

export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === 'undefined') {
    return '';
  }
  return localStorage.getItem(key);
};
