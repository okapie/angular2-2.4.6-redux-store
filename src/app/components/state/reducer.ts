export const userInfo = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'LOGIN':
      return payload;
    default:
      return state;
  }
};

export const bannersInfo = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'GET_BANNERS':
      return payload;
    default:
      return state;
  }
};

export const funnyGuyInfo = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'GET_FUNNY_GUY':
      return payload;
    default:
      return state;
  }
};
