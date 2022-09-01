import React, { useEffect } from "react";
import ProductCategory from "../components/ProductCategory";
import ProductInfo from "../components/ProductInfo";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/productsSlice";
import Loading from "../components/Loading";
import ProductFilter from "../components/ProductFilter";
import SeoField from "../components/SeoField";

const Home = () => {
  // productsSlice.jsx'de axios ile çağrılan ürünler buruya gönderildi.
  const dispatch = useDispatch();
  const { productsList, loading } = useSelector((state) => state.products);

  // useEffect
  useEffect(() => {
    dispatch(getProducts());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <ProductCategory />
          <ProductFilter />
          <ProductInfo productsList={productsList} />
          <SeoField />
        </div>
      )}
    </>
  );
};

export default Home;
