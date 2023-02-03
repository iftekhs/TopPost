const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const cl = (link) => {
  return process.env.REACT_APP_SERVER_ROOT + link;
};

export const formatDate = (date) => {
  if (date) {
    return `${new Date(date).getDate()} ${months[new Date(date).getUTCMonth()]} ${new Date(
      date
    ).getFullYear()}`;
  }
  return;
};
