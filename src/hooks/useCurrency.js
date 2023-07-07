import { useState, useEffect } from "react";

const useCurrency = (value) => {
    const [formattedValue, setFormattedValue] = useState('');

    useEffect(() => {
      const formatCurrency = () => {
        const formatted = value.toLocaleString('vi-VN', {
          style: 'currency',
          currency: 'VND'
        });
        setFormattedValue(formatted);
      };

      formatCurrency();
    }, [value]);

    return formattedValue;
}

export default useCurrency;