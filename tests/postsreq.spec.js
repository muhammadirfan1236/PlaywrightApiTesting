const { test, expect } = require('@playwright/test');


const postRequest = require('../test-data/post_request_body.json'); // adjust path as needed


test("Create POST api request using JSON file in playwright", async ({request,}) => {
    // create post api request using playwright
    const postAPIResponse = await request.post("/booking", {
    data: postRequest,
    });
    
    console.log(await postAPIResponse.json());


    expect(postAPIResponse.ok()).toBeTruthy();
  expect(postAPIResponse.status()).toBe(200)

  

})