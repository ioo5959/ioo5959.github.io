import React, { useState } from 'react';
import './App.css';
//import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Font Awesome 아이콘 사용
import sampleImage from './sampleImage.jpg'; // 이미지를 프로젝트에 추가하고 경로를 맞춰주세요

function App() {
  const [cartCount, setCartCount] = useState(0); // 장바구니 아이템 개수를 관리하는 상태

  const [addedToCart, setAddedToCart] = useState(false); // 상품이 장바구니에 담겼는지 여부를 관리하는 상태

  const handleToggleCart = () => {
    if (addedToCart) {
      setCartCount(cartCount - 1); // 상품이 이미 담긴 상태이면 cartCount 감소
    } else {
      setCartCount(cartCount + 1); // 상품이 담기지 않은 상태이면 cartCount 증가
    }
    setAddedToCart(!addedToCart); // 상태를 반전시킴
  };


  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="cart-icon">
            <FaShoppingCart size={26} color="white" />
            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount}
              </span>
            )}
          </div>
        </nav>
      </header>
      <main>
        <h1>신발 상품 목록</h1>
        <div className="content-box">
          <div className="image-container">
            <img src={sampleImage} alt="Sample" />
          </div>
          <div className="text-container">
            <p>
              브랜드 A
              <br />
              <span style={{ color: 'gray' }}>편안하고 착용감이 좋은 신발</span>
              <br />
              30,000원
            </p>
          </div>
          <button name="toggle" onClick={handleToggleCart}>
            {addedToCart ? "담김!" : "담기"}
          </button>
            <button>구매</button>
        </div>
      </main>
    </div>
  );
}

export default App;

