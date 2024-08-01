import React from 'react';
import { Link } from 'react-router-dom'; //구매버튼에 링크 걸기
import sampleImage from './sampleImage.jpg'; // 이미지를 프로젝트에 추가하고 경로를 맞추기

function Article(){
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
    <button name="plus">담기</button>
    <Link to="/payment">
      <button>구매</button>
    </Link>
  </div>
  }

  function ProductList() {

    const [cartCount,setCarCount] = useState(0);
  
    const addToCart = () => {
      setCartCount(cartCount+1);
    };
  
    return (
      <div>
        <header>
          <nav style={{ backgroundColor: 'black', height: '50px',
             display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '0 20px' }}>
              <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                <FaShoppingCart />
                <span style={{ marginLeft: '8px' }}>{cartCount}</span>
              </div>
             </nav>
        </header>
        <main>
          <h1>신발 상품 목록</h1>
          <Article></Article>
        </main>
      </div>
    );
  }
  
  export default ProductList;