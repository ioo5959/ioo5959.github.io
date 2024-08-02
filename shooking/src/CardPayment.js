import React, { useState } from 'react';

function CardPayment() {
  const [cards, setCards] = useState([]);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cardName, setCardName] = useState('');
  const [cvv, setCvv] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAddCard = () => {
    const newCard = {
      number: cardNumber,
      expiry: expiryDate,
      name: cardName,
      cvv,
    };
    setCards([...cards, newCard]);
    setCardNumber('');
    setExpiryDate('');
    setCardName('');
    setCvv('');
    setIsAdding(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cardNumber') setCardNumber(value);
    if (name === 'expiryDate') setExpiryDate(value);
    if (name === 'cardName') setCardName(value);
    if (name === 'cvv') setCvv(value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>나의 카드 목록</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
              <div style={{ fontSize: '16px', marginBottom: '5px' }}>{card.number}</div>
              <div style={{ color: 'gray', marginBottom: '5px' }}>{card.expiry}</div>
              <div>{card.name}</div>
            </div>
          ))
        ) : (
          <div style={{ border: '1px solid #ccc', padding: '20px', width: '200px', textAlign: 'center' }}>
            새로운 카드를 등록해주세요.
          </div>
        )}
        <button onClick={() => setIsAdding(true)} style={{ width: '200px', padding: '20px', cursor: 'pointer' }}>
          +
        </button>
      </div>

      {isAdding && (
        <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc' }}>
          <h3>카드 추가</h3>
          <div>
            <label>카드 번호</label>
            <input type="text" name="cardNumber" value={cardNumber} onChange={handleInputChange} />
          </div>
          <div>
            <label>만료일</label>
            <input type="text" name="expiryDate" value={expiryDate} onChange={handleInputChange} />
          </div>
          <div>
            <label>카드 소유자 이름</label>
            <input type="text" name="cardName" value={cardName} onChange={handleInputChange} />
          </div>
          <div>
            <label>보안 코드 (CVV)</label>
            <input type="password" name="cvv" value={cvv} onChange={handleInputChange} />
          </div>
          <button onClick={handleAddCard} style={{ marginTop: '10px' }}>작성 완료</button>
        </div>
      )}
    </div>
  );
}

export default CardPayment;
