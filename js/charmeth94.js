var s = "ZEBRA";
var s2 = "AbCdEfG";
document.writeln("<p>Character at index 0 in '" + s + "' is " + s.charAt(0));
document.writeln("<br/>Character code at index 0 in '" + s + "' is " + s.charCodeAt(0) + "</p>");
document.writeln("<p>" + String.fromCharCode(87, 79, 82, 68) + "' contains character codes 87, 79, 82, and 68</p>");
document.writeln("<p>" + s2 + "' in lowercase is '" + s2.toLowerCase() + "'");
document.writeln("<br/>'" + s2 + "' in uppercase is '" + s2.toUpperCase() + "'</p>");