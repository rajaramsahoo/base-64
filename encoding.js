/*
encoding
hello => aGVsbG8=
code => 

Steps: 
1. get the ascii codes of the input: 
104, 101, 108, 108, 111

2. convert it into binary
1101000, 1100101, 1101100, 1101100, 1101111

3. adjust the binary number to length 8
01101000, 01100101, 01101100, 01101100, 01101111

4. combine it
0110100001100101011011000110110001101111

5. break it in 6bits 
011010 000110 010101 101100 011011 000110 1111

6.pad 0 in the last element (added 2 zeroes) 
011010 000110 010101 101100 011011 000110 111100

7. convert it back to decimal
26 6 21 44 27 6 60

8. check in the base64 table
a G V s b G 8 

if padding 
2 zeroes add =
4 zeroes add ==

9. Final
aGVsbG8=
*/
import readlineSync from "readline-sync"
function encoding(){
        const inputString =readlineSync.question("Enter the word :- ");
        const splitString = inputString.split("");
        // console.log(splitString);
        const ascii_code = splitString.map((ele)=>ele.charCodeAt(0));
        // console.log(ascii_code);
        const binary8 = ascii_code.map((ele)=>ele.toString(2).padStart(8,"0"));
        // console.log(binary8)
        const combine = binary8.join("").split("");
        // console.log(combine);
        const binary_6 = [];
        const groupSize = 6;
        let padingCount = 0;
        for (let i = 0; i < combine.length; i += groupSize) {
            const group = combine.slice(i, i + groupSize).join('');
            binary_6.push(group);
          }
        //   console.log(binary_6);
          if(binary_6[binary_6.length-1].length==4){
              binary_6[binary_6.length-1]=binary_6[binary_6.length-1].padEnd(6,"0")
              padingCount=2;
          }
          else if(binary_6[binary_6.length-1].length ==2){
            binary_6[binary_6.length-1]=binary_6[binary_6.length-1].padEnd(6,"0")
            padingCount=4;
        }

//  console.log(binary_6);
//  console.log(padingCount);
 const newDecimal = binary_6.map((ele)=>parseInt(ele,2))

 console.log(newDecimal);
 const base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
 const base64Value = newDecimal.map((ele)=>base64[ele]);
 console.log(base64Value)
 if(padingCount==2){
    base64Value.push("=")
 }
 else if(padingCount==4){
    base64Value.push("==")
 }
//  console.log(base64Value);
 const result = base64Value.join("");
 console.log(result)
}

encoding()





