import React, { useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';

import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';

import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {

  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  const scrollToTitle = (id) => {
    const title = document.getElementById(id);
    title.scrollIntoView({ behavior: 'smooth',block:'center',inline:'nearest' });
  };

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      });
      categoryData.categories.forEach(category => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then(categories => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = id => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id
    });
  };

  return (
    <div>
      <h4 className='categoryMenuTitle' id="category-list"><strong>Top Category picks</strong></h4>
      {categories.map(item => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);scrollToTitle('product-list');
          }}
          className='category-button'
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
