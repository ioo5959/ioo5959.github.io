import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Font Awesome 아이콘 사용
import sampleImage from './sampleImage.jpg'; // 이미지를 프로젝트에 추가하고 경로를 맞춰주세요

function App() {
  const [cartCount, setCartCount] = useState(0); // 장바구니 아이템 개수를 관리하는 상태

  const handleAddToCart = () => {
    setCartCount(cartCount + 1); // "담기" 버튼을 누르면 cartCount 증가
  };

  return (
    <div>
      <header>
        <nav style={{ backgroundColor: 'black', height: '50px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '0 20px' }}>
          <div style={{ position: 'relative' }}>
            <FaShoppingCart size={24} color="white" />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                backgroundColor: 'red',
                borderRadius: '50%',
                color: 'white',
                padding: '2px 6px',
                fontSize: '12px'
              }}>
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
              30000원
            </p>
          </div>
          <button name="plus" onClick={handleAddToCart}>담기</button>
          <Link to="/payment">
            <button>구매</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default App;

