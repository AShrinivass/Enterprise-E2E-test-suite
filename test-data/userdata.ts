export const createAccountPayload = {
    name: 'Shrinivas',
    email: `shrnvs${Date.now()}@hello.com`, 
    password: 'WelcomePassword123',
    title: 'Mr',                        
    birth_date: '01',                   
    birth_month: '06',                  
    birth_year: '1995',                
    firstname: 'Shrinivas',
    lastname: 'A',
    company: 'TestCompany',
    address1: '221, 4th Main Road',
    address2: 'Banashankari',           
    country: 'India',
    state: 'Karnataka',
    city: 'Bangalore',
    zipcode: '560001',
    mobile_number: '9876543210'        
};

export const deleteAccountPayload = {
    email: createAccountPayload.email,
    password: createAccountPayload.password
};