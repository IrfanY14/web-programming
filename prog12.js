<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body><script>
    function Passbyvalue(a, b)
  {
  	let tmp;
	tmp = b;
	b = a;
	a = tmp;function Passbyvalue(a, b) {
        let tmp;
        tmp = b;
        b = a;
        a = tmp;
        console.log(`Inside Pass by value
            function -> a = ${a} b = ${b}`);
    }
    
    let a = 1;
    let b = 2;
    console.log(`Before calling Pass by value
            Function -> a = ${a} b = ${b}`);
    
    Passbyvalue(a, b);
    
    console.log(`After calling Pass by value
        Function -> a =${a} b = ${b}`);
    
	console.log(`Inside Pass by value
		function -> a = ${a} b = ${b}`);
  }
</script>
</body>
</html>