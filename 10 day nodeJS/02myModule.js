exports.isPrime=function(n)
{
	for(i=2;i<n;i++)
	{
		if(n%i==0)
		{return false;}
	}
	return true;
}

exports.isFact=function(n)
{
	fact=1;
	for(i=1;i<=n;i++)
	{
	fact*=i;
	}
	return fact;
}

exports.isPerfect=function(n)
{
n2=n;
sum=0;
flag=false;
for(i=1;i<n;i++)
{
	if(n%i==0)
	{
		sum+=i;
	}
}
if(sum==n)
flag=true;
return flag;
}