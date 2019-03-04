const createStore = (defaultState = {}, reducers = {}) => {
  const localState = defaultState;
  const getState = () => ({ ...localState });

  let listeners = [];
  const subscribe = (action, callback) => {
    const id = Math.random()
      .toString(36)
      .slice(2);
    listeners.push({
      [id]: [action, callback],
    });
    return id;
  };

  const unSubscribe = (id) => {
    listeners = listeners.filter((listenerObject) => !listenerObject[id]);
  };

  const dispatch = (action) => {
    Object.entries(reducers).forEach(([key, dispatcher]) => {
      localState[key] = dispatcher(localState[key], action);
    });

    listeners.forEach((listenerObj) => {
      // eslint-disable-next-line prefer-const
      let [listenerAction, callback] = listenerObj[Object.keys(listenerObj)[0]];
      switch (typeof listenerAction) {
        case 'function':
          listenerAction({ state: getState(), action });
          break;
        case 'string':
          listenerAction = [listenerAction];
        // eslint-disable-next-line no-fallthrough
        case 'object':
          if (Array.isArray(listenerAction) && listenerAction.indexOf(action.type) !== -1) {
            callback({ state: getState(), action });
          }
          break;
        default:
      }
    });

    return Promise.resolve(action);
  };

  return { dispatch, subscribe, getState, unSubscribe };
};

export default createStore;
