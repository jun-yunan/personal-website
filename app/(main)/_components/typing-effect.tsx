'use client';

import { useState, useEffect } from 'react';

const TypingEffect = () => {
  const text = 'Nguyen Anh Kiet';
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = 150; // Tốc độ đánh chữ (ms)

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index)); // Thêm ký tự hiện tại
        index++; // Tăng chỉ số sau khi thêm
      } else {
        clearInterval(interval); // Dừng khi hết chuỗi
      }
    }, typingSpeed);

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, []);

  return (
    <p className="text-5xl font-bold text-white">
      {displayedText}
      <span className="animate-pulse">|</span>{' '}
      {/* Hiệu ứng con trỏ nhấp nháy */}
    </p>
  );
};

export default TypingEffect;
