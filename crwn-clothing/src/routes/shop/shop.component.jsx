import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { useEffect } from 'react';
import { fetCategoriesAsync, setCategories } from '../../store/categories/category.action'
import { useDispatch } from 'react-redux';

const Shop = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetCategoriesAsync())
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
