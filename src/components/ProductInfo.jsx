import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const ProductInfo = ({ productsList }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [isShow, setIsShow] = useState(true);

  const handleClick = async (id) => {
    const navigateToDetail = await productsList?.filter(
      (product) => product.id === id
    ); // Ürüne tıklandığında detay sayfasının açılması için filtreleme yapıldı.
    await navigate("/product", { state: navigateToDetail }); // ProductDetail.jsx'e gönderildi
  };

  const handlePage = (e) => {
    let number = Number(e.target.value);
    setItems(productsList?.slice(12 * number - 12, 12 * number));
    setIsShow(false);
  };
  return (
    <div>
      <div className="productlist container">
        {isShow
          ? productsList?.slice(0, 12).map((product) => {
              return (
                <div className="card" onClick={() => handleClick(product.id)}>
                  <Helmet>
                    <title>{product.category}</title>
                    <meta name="description" content={product.category} />
                  </Helmet>
                  <img
                    alt={product.name}
                    src={product.image}
                    className="card__image"
                  />
                  <div className="card__info p-1 text-center">
                    <h5>{product.name}</h5>
                    <p className="fs-6">350 GR</p>
                    <p className="text-decoration-line-through">
                      {Number(product.price) + 5} ₺
                    </p>
                    <p className="fs-3">{product.price} ₺</p>
                  </div>
                  <div className="card__over">
                    <div>
                      {product.badge.map((item) => {
                        return <span>{item}</span>;
                      })}
                    </div>
                    <p>+</p>
                  </div>
                </div>
              );
            })
          : items?.map((product) => {
              return (
                <div className="card" onClick={() => handleClick(product.id)}>
                  <Helmet>
                    <title>{product.category}</title>
                    <meta name="description" content={product.category} />
                  </Helmet>
                  <img
                    alt={product.name}
                    src={product.image}
                    className="card__image"
                  />
                  <div className="card__info p-1 text-center">
                    <h5>{product.name}</h5>
                    <p className="fs-6">350 GR</p>
                    <p className="text-decoration-line-through">
                      {Number(product.price) + 5} ₺
                    </p>
                    <p className="fs-3">{product.price} ₺</p>
                  </div>
                  <div className="card__over">
                    <div>
                      {product.badge.map((item) => {
                        return <span>{item}</span>;
                      })}
                    </div>
                    <p>+</p>
                  </div>
                </div>
              );
            })}
      </div>
      <div onClick={(e) => handlePage(e)} className="productlist__container">
        <button value="1">1</button>
        <button value="2">2</button>
        <button value="3">3</button>
      </div>
    </div>
  );
};

export default ProductInfo;
