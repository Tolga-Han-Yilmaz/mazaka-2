import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductCategory = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const url = "https://powerful-savannah-74330.herokuapp.com/categories";
    try {
      const { data } = await axios(url);

      return setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="category container">
      <div className="navbar__category-info mt-4">
        <div>
          <h3>Kahvaltılık</h3>
          <p>
            E-Hamal'da Kumbara sistemi var. Yaptığın alışverişlerden Türk Lirası
            biriktir. Kazandığın paralarla tekrar alışveriş yap.
          </p>
        </div>
      </div>
      <div className="category__btn">
        {categories?.map((category, index) => {
          return (
            <div key={index}>
              <img src={category.image} alt={category.name} />
              <button className="category__btn-filter" key={index}>
                {category.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCategory;
