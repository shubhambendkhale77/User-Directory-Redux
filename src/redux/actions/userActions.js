export const loadingData =()=>{
  return{type:'FETCH_LOADING'}
}

export const fetchData = (data) => {
  return { type: "FETCH_DATA", payload: data };
};

export const errorData =(error)=>{
  return {type:'FETCH_ERROR',payload:error}
}
export const fetchUserData = () => async (dispatch) => {
  dispatch(loadingData())
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    dispatch(fetchData(data));
  } catch (error) {
    dispatch(errorData(error.message))
  }
};
