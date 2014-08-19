	// Une classe avec ses attributs et méthodes
	function Compteur(val)
	{
		this.value = (val == null)?0:val;
	}
	Compteur.prototype.plus = function(val)
	{
		this.value += (val == null)?1:val;
	}
	Compteur.prototype.moins = function(val)
	{
		this.value -= (val == null)?1:val;
	}
	Compteur.prototype.alert = function()
	{
		alert(this.value);
	}
	
	// Une fonction
	function puissance(x, n)
	{
		if(n <= 0) return 1;
		else return puissance(x, n-1)*x;
	}