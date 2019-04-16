factorial = (n)=> {if(n==0) return 1; else  return n*factorial(n-1)}

fibo = (m) => {if(m<=1) return 1; else  return fibo(m-1)+fibo(m-2)}


for(x=1;x<=30;x++)
{
  console.log("FIBONACCI: ", fibo(x),"*-------------*","FACTORIAL: ",factorial(x))
}
