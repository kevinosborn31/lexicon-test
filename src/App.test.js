import App from './App';

test('Returns null if incorrect props are passed to Movie Card', () => {
  
    // required props: title, id, image, priceA, priceB, companyA, companyB
    const missingProps1 = {
      title: "test", 
      id: 32, 
      image: "https://test.com", 
      priceA: 32.00, 
      companyA: "coolCompany", 
    }
    const missingProps2 = {}
    const wrongProps ={
      whatchamacallit: 32,
      whodoneit: "i dont even know"
    }
  
    expect(MovieCard(wrongProps)).toBeNull();
    expect(MovieCard(missingProps2)).toBeNull();
    expect(MovieCard(missingProps1)).toBeNull();
  })
