const data = [
    {
      id: 1,
      title: 'Luxury Lights',
      price: '$20',
      cover: 'sam.png',
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: 'Furniture',
      price: '$20',
      cover: 'gam.png',
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 3,
      title: 'Medicine',
      price: '$20',
      cover: 'sal.png',
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 4,
      title: 'Corridor',
      price: '$20',
      cover: 'kor.png',
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ];
  
  export const getProducts = () => {
    return data;
  };
  