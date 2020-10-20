		var t = 0;
		
		function fun1()
		{
			var a = 0;
			document.getElementById("quantity").value=a;
			t=1;
		}
		function fun2()
		{
			var b = 0;
			document.getElementById("quantity").value=b;
			t=2;
		}
		function fun3()
		{
			var i = parseInt(document.getElementById("quantity").value);
			if(i==0||i>=0)
			{
				i=--i;
				var n=i;
				document.getElementById("quantity").value=i;
			}	
		}
		function fun4()
		{
			var i = parseInt(document.getElementById("quantity").value);
			if(i==0||i>0)
			{
				i=++i;
				document.getElementById("quantity").value=i;
			}	
		}
		function amount()
		{
			var i = document.getElementById("quantity").value;
			var total;
			if(i!=null)
			{
				if(t==1)
				{
					total=i*399;
					document.getElementById("amount").value=total;
				}
				else if(t==2)
				{
					total=i*209;
					document.getElementById("amount").value=total;
				}
			}
			else if(i==null){
				alert("please select weight and quantity of the product");
			}
			
		}
	