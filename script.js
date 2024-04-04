const input = document.getElementById('input');

function reversestring(str) {
  return str.split("").reverse().join("");
}

function checkValue() {
  const value = input.value;
  const reverse = reversestring(value);

  if (value === reverse) {
    alert('Palindrome!')
  }
  else {
    alert('Not a Palindrome!')
  }

  input.value = "";
}