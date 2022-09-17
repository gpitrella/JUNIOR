// export let chooseColor = function(status) {
//   switch(status.toUpperCase()) {
//     case "BRONCE":
//       return "#CD7F32";
//     case "PLATA":
//       return "#c0c0c0";
//     default:
//       return "#ffd700";
//   }
// }

// export let generateRange = function (start, stop, step = 1) {
//   return Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
// }

// export let promisifiedSetTimeOut = function(delay) {
//   return new Promise((resolve) => setTimeout(resolve, delay));
// }

// export let fetchHasFinished = function(action) {
//   return !action.type.endsWith('pending');
// }

// export let fetchIsPending = function(action) {
//   return action.type.endsWith('pending');
// }

// export let numberWithCommas = function(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// export let generateQueryWithState = function(state) {
//   return generateQuery({
//     text: state.search,
//     orderBy: state.orderBy,
//     order: state.order,
//     status: state.status,
//     page: state.currentPage
//   });
// }

export let generateQueryWithState = function(state) {
    return ({
      teches: [state.tech],
      payment: (state.payment === "All" 
                      ? "All" 
                      : state.payment === "Colaborativo" 
                                ? false : true),
      // status: (state.status === "All" 
      //                 ? "All" 
      //                 : state.status === "develop" 
      //                           ? false : true)                           
    });
}



// export let generateQuery = function({ text = '', orderBy = 'ranking', order = 'descending', status = 'all', page = 1 }) {
//   return `order=${orderBy},${order === 'descending' ? 'desc' : 'asc'}${text.length > 0 ? `&text=${text}` : ''}${status !== 'all' ? `&status=${status}` : ''}&page=${page}`;
// }

// export let saveToken = function(id, token) {
//   localStorage.setItem('player', JSON.stringify({ token, id }));
// }

// export let deleteToken = function() {
//   localStorage.removeItem('player');
// }

// export let getToken = function() {
//   return JSON.parse(localStorage.getItem('player'));
// }

// export let existToken = function() {
//   return localStorage.getItem('player');
// }

// export let getHeaderWithToken = function(token) {
//   return { 
//     headers: {
//             "Content-type": "application/json",
//             "Authorization": `Bearer ${token}`
//     },
//     withCredentials: true,
//   }
// }