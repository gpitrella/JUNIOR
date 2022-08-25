import {
    CATEGORIES_TO_DASHBOARD,
    CREATE_CATEGORY, 
    CREATE_BRAND,
    UPDATE_BRAND,
    DELETE_BRAND,
    UPDATE_CATEGORY,
    DELETE_CATEGORY,
    COUNT_ORDERS,
    SUM_ORDERS,
    SUM_ORDERS_TODAY,
    SUM_LAST_WEEK,
    SUM_LAST_MONTH,
    SUM_BEFORELAST_MONTH,
    SUM_LASTTHREE_MONTH,
    GET_ORDERS_TODAY,
    GET_ALL_COMMENTS,
    UPDATE_COMMENT_ANSWER
} from '../actions/actiontype';

const initialState = {
    categoriesToDashboard: [],
    countOrders: 0,
    totalSales: 0,
    totalSalesToday: 0,
    lastSalesWeek: 0,
    lastSalesMonth: 0,
    beforeLastMonth: 0,
    lastThreeMonth: 0,
    allOrdersToday: [],
    allComments: [],
    commentAnswer: {}
};

const dashboardReducer = function(state = initialState, { type, payload }) {
    switch(type) {
        case COUNT_ORDERS:
            return {
                ...state,
                countOrders: payload
            }
        case SUM_ORDERS:
            return {
                ...state,
                 totalSales: payload
            }    
        
        case SUM_ORDERS_TODAY:
            return {
                ...state,
                totalSalesToday: payload
            }    

        case SUM_LAST_WEEK:
            return {
                ...state,
                lastSalesWeek: payload
                }

        case SUM_LAST_MONTH:
            return {
                ...state,
                lastSalesMonth: payload
               }    
        
        case SUM_BEFORELAST_MONTH:
            return {
                ...state,
                beforeLastMonth: payload
                }           

        case SUM_LASTTHREE_MONTH:
            return {
                ...state,
                lastThreeMonth: payload
                }    
        
        case GET_ORDERS_TODAY:
            return {
                ...state,
                allOrdersToday: payload
                }
        case CATEGORIES_TO_DASHBOARD:
            return {
                ...state,
                categoriesToDashboard: payload
            }
        case CREATE_CATEGORY:
            return {
                ...state,
                payload
            }
        case UPDATE_CATEGORY:
            return {
                ...state,
                payload
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                payload
            }
        case CREATE_BRAND:
            return {
                ...state,
                payload
            }
        case UPDATE_BRAND:
            return {
                ...state,
                payload
            }
        case DELETE_BRAND:
            return {
                ...state,
                payload
            }
        case GET_ALL_COMMENTS:
            return {
                ...state,
                allComments: payload
            }
        case UPDATE_COMMENT_ANSWER:
            return {
                ...state,
                commentAnswer: payload
            }
        //DEFAULT CASE:
        default:
            return {
                ...state,
            }
    }
}

export default dashboardReducer;