const { API_URL } = process.env;
let timeoutId = -1;
let saveTimeoutId = -1;
const applyMiddleware = store => next => async action => {
  const { dispatch, getState } = store;
  const { type, name = '', value = '', id } = action;
  if (type === 'UPDATE_VALUE') {
    if (name === 'content') {
      clearTimeout(saveTimeoutId);
      saveTimeoutId = setTimeout(async () => {
        const options = {
          method: 'POST',
          body: JSON.stringify({ id, content: value }),
          headers: {
            'Content-Type': 'application/json',
          }
        };
        try {
          const response = await fetch(`${API_URL}note/${id}`, options);
        } catch (err) {
          console.log(err);
        }
      }, 1000);
    }
    if (name === 'id') {
      clearTimeout(timeoutId);
      setTimeout(async () => {
        const response = await fetch(`${API_URL}note/${value}`, {});
        const data = await response.json();
        const { content } = data;
        dispatch({
          type: 'LOADED_CONTENT',
          id: value,
          content
        })
      }, 100);
    }
  }
  const nextState = next(action);
  console.log(getState(), nextState);
  return nextState;
}

export default applyMiddleware;
