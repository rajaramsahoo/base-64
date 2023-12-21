function decoding(){
    let decodeString ="aGVsbG8==";
    console.log(decodeString);
    let splitDecodeString = decodeString.split('')
    console.log(splitDecodeString);
    const base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    const mgh = splitDecodeString.map((ele)=>base64.indexOf(ele))
    console.log(mgh)



}
decoding()