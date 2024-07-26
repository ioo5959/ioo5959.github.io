import React from 'react';
import './App.css';
import sampleImage from './sampleImage.jpg'; // 이미지를 프로젝트에 추가하고 경로를 맞춰주세요

function App() {
  return (
    <div>
      <header>
        <nav style={{ backgroundColor: 'black', height: '50px' }}></nav>
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
              <span style = {{color: 'gray'}}>편안하고 착용감이 좋은 신발</span>
              <br />
              30000원
            </p>
          </div>
          <button name="plus">담기</button>
        </div>
      </main>
    </div>
  );
}

export default App;
