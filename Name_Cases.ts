let personName ="Urooba siddiqui"
console.log("lowercase:",personName.toLowerCase());

// uupercase
console.log("uppercase:",personName.toLocaleUpperCase());

// Titlecase

console.log("titlecase:",personName.replace(/\bw/g,c =>c.toUpperCase()));

