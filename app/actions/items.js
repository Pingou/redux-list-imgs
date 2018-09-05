var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsSetComment(item) {

    return {
        type: 'ITEMS_SET_COMMENT',
        item: item
    };
}




export function itemsFetchData(url) {


    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        var mock = new MockAdapter(axios);
        mock.onGet('/imgs').reply(200, {
          "imgs": [
            { "id": 1, "url": "https://foodrevolution.org/wp-content/uploads/2018/05/blog-featured_mushrooms-20180515.jpg", "comment" : '' },
            { "id": 2, "url": "https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2017/thegoodtheba.jpg", "comment" : '' },
            { "id": 3, "url": "https://dingo.care2.com/pictures/causes/2999/2998916.large.jpg", "comment" : '' },
            { "id": 4, "url": "https://www.gardensparkle.com.au/wp-content/uploads/2016/03/Lilac-Mushroom-Cluster-2.jpg", "comment" : ''}
            
          ]
        });

        axios.get(url)
          .then((response) => {

              //  console.log(response)
                //alert('>' + JSON.stringify(response.json()))

                if (response.status != 200) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response.data.imgs;
            })
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch((err) => dispatch(itemsHasErrored(true)));

       
    };
}
