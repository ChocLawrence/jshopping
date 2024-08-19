import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";

import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";

import { idbPromise } from "../../utils/helpers";

const SearchField = () => {
  const [state, dispatch] = useStoreContext();
  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
      // add else if to check if `loading` is undefined in `useQuery()` Hook
    } else if (!loading) {
      // since we're offline, get all of the data from the `products` store
      idbPromise("products", "get").then((products) => {
        // use retrieved data to set global state for offline browsing
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  function isEmptyOrNull(value) {
    if (
      value === '' ||
      value === null ||
      value === undefined ||
      value === 'undefined'
    ) {
      return true;
    }
    return false;
  }

  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    let products = filterProducts();
    let match = products.filter((el) => el.name == newValue);
    document.getElementById('searchTerm').value = newValue;
    
    // Validate the input value
    if (!isEmptyOrNull(match[0]._id)) {
      setIsValid(true);
      window.location.href = `/products/${match[0]._id}`;
    } else {
      setIsValid(false);
    }
  };



  return (
    <div className="main">
      <div className="wrap">
        <div className="search">
          <input
            list="data"
            type="text"
            id="searchTerm"
            className="searchTerm"
            placeholder="What can we help you with today?"
            onChange={handleInputChange}
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <datalist id="data">
        {filterProducts().map((product) => (
          <option key={product._id}>{product.name}</option>
        ))}
      </datalist>
    </div>
  );
};

export default SearchField;
