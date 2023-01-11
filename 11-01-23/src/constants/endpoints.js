export const endpoints = {
  base: `https://random-data-api.com/api/v2`,
  get addresses() {
    return `${this.base}/addresses`;
  },
  get beers() {
    return `${this.base}/beers`;
  },
  get credit_cards() {
    return `${this.base}/credit_cards`;
  },
  get users() {
    return `${this.base}/users`;
  },
};
