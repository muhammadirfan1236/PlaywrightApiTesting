

const { test, expect } = require("@playwright/test");

test('Create Test',async({ request })=>{

    const postAPIResponse=await request.post(`/booking`,{
        
        data:{
            "firstname": "Testers talk playwright",
            "lastname": "testers talk api testing",
            "totalprice": 1000,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "super bowls"
        }
    })
    expect(postAPIResponse.ok()).toBeTruthy();
    expect(postAPIResponse.status()).toBe(200);

    const postAPIResponseBody=await postAPIResponse.json();
    console.log(postAPIResponseBody);


    expect(postAPIResponseBody.booking).toHaveProperty("firstname","Testers talk playwright")
    
   
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin","2018-01-01")
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkout","2019-01-01")
    


})


