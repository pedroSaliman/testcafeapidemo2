fixture `requestapi`
test("the get api",async (t)=>{
    const result=await t.request({
        url:"https://httpbin.org/get",
        method:"Get"
    });
   
    await t.expect(result.status).eql(200);
    await t.expect(result.body.headers.Accept).eql("application/json, text/plain, */*")
    console.log(result.body);
})


test("the put api",async (t)=>{
    const result=await t.request({
        url:"https://httpbin.org/put",
        method:"PUT"
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
////////////////////POST
test("the post api",async (t)=>{
    const result=await t.request({
        url:"https://httpbin.org/post",
        method:"post"
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
//////////////////DELETE
test("the delete api",async (t)=>{
    const result=await t.request({
        url:"https://httpbin.org/delete",
        method:"DELETE"
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
/////////////////////STATUS
test("the get status api",async (t)=>{
    const result=await t.request({
        url:"https://httpbin.org/status/200",
        method:"Get"
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})

//////////////////////POST
test("the post status api",async (t)=>{
    const result=await t.request({
        url:"https://httpbin.org/status/200",
        method:"POST"
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
//////////////////////PUT/////////
test("the put status api",async (t)=>{
    const result=await t.request({
        url:"https://httpbin.org/status/200",
        method:"put"
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
///////////////////DELETE
test("the delete status api",async (t)=>{
    const result=await t.request({
        url:"https://httpbin.org/status/200",
        method:"DELETE"
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
