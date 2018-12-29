How to use the typewriter:

There is a class called Writing, which takes four arguments:
  text: text that you want the typewriter to type.
  size: size of the text that the typewriter will type.
  delay: how long the typewriter waits after finishing typing this instance before moving on to the next if there is a next one.
  classes: any additional classes you want to add to the text.

code:
let newWriting = new Writing( text, size, delay, classes );

The typewriter is usable in all js files except pageFunctions due to the ordering of the files in index.html
Once you declare the Writing, then you can call the typewriter to type it using the function startTypewriter( $parent, messages ).

$parent points to the element of the page that you want to append your messages to.
messages is an array with messages inside it of class Writing.
