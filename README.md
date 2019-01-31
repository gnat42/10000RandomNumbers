Program Requirements
====================

Please write a program that generates a list of 10,000 numbers in random order each time it is run. Each number in the list must be unique and be between 1 and 10,000 (inclusive).

General Notes
-------------

Writing good algorithms is difficult so instead of coming up with my own I looked at a few shuffling algorithms out there.
I chose to use an algorithm by Fisher-Yates/Knuth that travels backwards through the array shuffling.
It has a O(n) time, not including the initialization of the array with numbers. 

Output wasn't specified so each program outputs an array and formats it for appropriate display for its environment.

JS Version
----------

Load the [js/index.html](js/index.html) file in a browser and click the 'Randomize' button. Output is generated in a div.

PHP Version
-----------

Although not requested I also wrote a PHP version. Run php main.php and it'll output to the console the shuffled array

C# Version
----------

Since I don't have a C# environment I may not get to this one but I've started looking at setting up Visual Studio on my computer so 
I can take a crack at it. I'll commit a version if family life doesn't require too much attention. 
