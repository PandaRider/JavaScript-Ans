// Exercise 1: Rewrite the function using '?' or '||'
// 
// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.
// 
// Rewrite it, to perform the same, but without if, in a single line.
// 
// Make two variants of checkAge:
// 1) Using a question mark operator '?'
// 2) Using OR ||


// Using a question mark operator '?':
function checkAge(age) {
    return (age > 18) ? true : console.log('Did parents allow you?');
}

// Using OR || (the shortest variant):
function checkAge(age) {
  return (age > 18) || console.log('Did parents allow you?');
}

// Note that the parentheses around age > 18 are not required here. They exist for better readabilty.
