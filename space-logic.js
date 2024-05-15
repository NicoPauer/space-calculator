function capacityCalc(width, jumps, distance)
{

    // Make the calcs

   // Format parameters to an understandble way for the algorithm

	width = parseFloat(width);
	jumps = parseFloat(jumps);
	distance = parseFloat(distance);

  // Calc how much objects can contains that distance separted by jumps
	let result = 0;

    for (let places = 0; places <= distance; places += 2)
    {
        console.log("Iteration: " + places);
        result += 1;
    }
  // Show only if the values are logic for a real context
	let output = document.getElementById('result');

    if ((width != NaN) && (width > 0) &&  (distance != NaN) && (distance > 0) && (jumps != NaN) && ((jumps > 0) && (jumps <= distance)))
    {
	    output.innerHTML = ('   At that space fits until <span class = "attention">' + result + '</span> times that object with the input data gaved.    ');
    }
    else
    {
        output.innerHTML = '    <span class = "attention">Review and fix up values, the calc need real and logic data.</span>   ';
    }

}
