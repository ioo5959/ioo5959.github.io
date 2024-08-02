import React, {useState} from 'react';
import {FaShoppingCart} from 'react-icons/fa'; // Font Awesome의 쇼핑카트 아이콘 사용
import { Link } from 'react-router-dom'; //구매버튼에 링크 걸기
import sampleImage from './sampleImage.jpg'; // 이미지를 프로젝트에 추가하고 경로를 맞추기

function Article({addToCart}){
    return <div className="content-box">
      <div className="image-container">
      <img src={sampleImage} alt="Sample" />
      </div>
      <div className="text-container">
      <p>
        브랜드 A
        <br />
        <span style = {{color: 'gray'}}>편안하고 착용감이 좋은 신발</span>
        <br />
        30000원
      </p>
    </div>
    <button name="plus" onClick={addToCart}>담기</button>
    <Link to="/payment">
      <button>구매</button>
    </Link>
  </div>
  }

  function ProductList() {

    const [cartCount,setCartCount] = useState(0); //장바구니에 아이템 개수를 관리하는 상태
  
    const addToCart = () => {
      setCartCount(cartCount+1); //"담기"버튼을 누르면 cartCount 증가
    };
  
    return (
      <div>
        <header>
          <nav style={{ backgroundColor: 'black', height: '50px',
             display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '0 20px' }}>
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
          {/* ContentBox 컴포넌트를 6번 반복하여 렌더링 */}
          {[...Array(6)].map((_, index) => (
          <Article key={index} addToCart={addToCart}></Article>
          ))}
        </main>
      </div>
    );
  }
  
  export default ProductList;