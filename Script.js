<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>

<h1>My First Website</h1>

<button onclick="showMessage()">Click Me</button>

<script src="script.js"></script>

</body>
</html><!DOCTYPE html>
<html>
<head>
    <title>My Styled Page</title>
    <!-- Links the external CSS file named style.css -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
</body>
</html>// script.js
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}
