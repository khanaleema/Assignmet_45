let personName: string= "AleemaKhan";
console.log("lowecase:", personName.toLowerCase());
console.log("uppercase:", personName.toLocaleUpperCase());
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));