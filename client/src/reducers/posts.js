const reducers = (posts = [], actions) =>{
    switch (actions.type) {
        case "FETCH_ALL":
            return actions.payload;
            
        case "CREATE":
            return posts;
    
        default:
            return posts;
            break;
    }
}

export default reducers;
