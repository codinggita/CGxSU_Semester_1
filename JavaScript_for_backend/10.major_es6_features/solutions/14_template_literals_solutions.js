/**
 * Template Literals - Exercise Solutions
 * JavaScript for Backend Development - ES6+ Features
 *
 * Run with: node 14_template_literals_solutions.js
 */

console.log('╔════════════════════════════════════════════════════════════════╗');
console.log('║  Template Literals - Solutions                                ║');
console.log('╚════════════════════════════════════════════════════════════════╝\n');

// ============================================================================
// Exercise 1: Student Profile Card
// ============================================================================

function createStudentProfile(student) {
  return `
=================================
       STUDENT PROFILE
=================================
Name: ${student.name}
Roll No: ${student.rollNo}
Branch: ${student.branch}
Year: ${student.year}
CGPA: ${student.cgpa}
Email: ${student.email}
=================================
  `.trim();
}

console.log('Exercise 1: Student Profile Card');
console.log('='.repeat(50));
const student = {
  name: "Arjun Kumar",
  rollNo: "21CSE101",
  branch: "Computer Science",
  year: 3,
  cgpa: 8.5,
  email: "arjun@example.com"
};
console.log(createStudentProfile(student));
console.log('\n');

// ============================================================================
// Exercise 2: Price Calculator
// ============================================================================

function calculateTotal(items) {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  const formatCurrency = (amount) => `₹${amount.toLocaleString('en-IN')}`;

  const itemLines = items.map(item =>
    `${item.name} x${item.quantity}: ${formatCurrency(item.price * item.quantity)}`
  ).join('\n');

  return `
========== INVOICE ==========
${itemLines}
----------------------------
Subtotal: ${formatCurrency(subtotal)}
Tax (18%): ${formatCurrency(tax)}
----------------------------
TOTAL: ${formatCurrency(total)}
============================
  `.trim();
}

console.log('Exercise 2: Price Calculator');
console.log('='.repeat(50));
const items = [
  { name: "Laptop", price: 45000, quantity: 1 },
  { name: "Mouse", price: 500, quantity: 2 },
  { name: "Keyboard", price: 1500, quantity: 1 }
];
console.log(calculateTotal(items));
console.log('\n');

// ============================================================================
// Exercise 3: HTML Table Generator
// ============================================================================

function generateTable(headers, rows) {
  const headerRow = `
    <tr>
      ${headers.map(h => `<th>${h}</th>`).join('\n      ')}
    </tr>`;

  const bodyRows = rows.map(row => `
    <tr>
      ${row.map(cell => `<td>${cell}</td>`).join('\n      ')}
    </tr>`).join('');

  return `
<table>
  <thead>${headerRow}
  </thead>
  <tbody>${bodyRows}
  </tbody>
</table>
  `.trim();
}

console.log('Exercise 3: HTML Table Generator');
console.log('='.repeat(50));
const headers = ["Name", "Age", "City"];
const rows = [
  ["Arjun", 19, "Ahmedabad"],
  ["Krishna", 20, "Surat"],
  ["Priya", 18, "Vadodara"]
];
console.log(generateTable(headers, rows));
console.log('\n');

// ============================================================================
// Exercise 4: Tagged Template for Currency
// ============================================================================

function currency(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i];
    const formatted = value !== undefined
      ? `₹${Number(value).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      : '';
    return result + str + formatted;
  }, '');
}

console.log('Exercise 4: Tagged Template for Currency');
console.log('='.repeat(50));
const price = 1234.56;
const taxAmount = 222.22;
console.log(currency`Total: ${price}, Tax: ${taxAmount}`);
console.log('\n');

// ============================================================================
// Exercise 5: Email Template Generator
// ============================================================================

function generateWelcomeEmail(user, course) {
  return `
Subject: Welcome to ${course.name}!

Dear ${user.name},

We are thrilled to welcome you to ${course.name}! Your journey to mastering new skills begins here.

📚 COURSE DETAILS
------------------
Course Name: ${course.name}
Start Date: ${course.startDate}
Duration: ${course.duration}
Format: Online

🎯 WHAT'S NEXT?
---------------
1. Check your email for login credentials
2. Join our student community
3. Review the course syllabus
4. Prepare your development environment

If you have any questions or need assistance, please don't hesitate to reach out to us at support@codinggita.com.

Best regards,
The CodingGita Team

---
This email was sent to ${user.email}
  `.trim();
}

console.log('Exercise 5: Email Template Generator');
console.log('='.repeat(50));
const user = { name: "Mahir", email: "mahir@example.com" };
const course = { name: "JavaScript Mastery", startDate: "2025-12-01", duration: "12 weeks" };
console.log(generateWelcomeEmail(user, course));
console.log('\n');

// ============================================================================
// Exercise 6: SQL Query Builder
// ============================================================================

function query(strings, ...values) {
  const sql = strings.reduce((result, str, i) => {
    return result + str + (i < values.length ? '?' : '');
  }, '');

  return {
    sql: sql.trim(),
    params: values
  };
}

console.log('Exercise 6: SQL Query Builder');
console.log('='.repeat(50));
const username = "arjun";
const minAge = 18;
const result = query`SELECT * FROM users WHERE name = ${username} AND age > ${minAge}`;
console.log('SQL:', result.sql);
console.log('Params:', result.params);
console.log('\n');

// ============================================================================
// Exercise 7: Code Generator
// ============================================================================

function generateClass(className, properties, methods) {
  const propertyList = properties.map(prop => `    this.${prop} = ${prop};`).join('\n');
  const params = properties.join(', ');
  const methodList = methods.map(method => `
  ${method}() {
    // Implementation for ${method}
    console.log(\`\${this.name} is ${method}ing\`);
  }`).join('\n');

  return `
class ${className} {
  constructor(${params}) {
${propertyList}
  }
${methodList}
}

// Usage example:
const student = new ${className}(${properties.map(p => `"${p}Value"`).join(', ')});
${methods.map(m => `student.${m}();`).join('\n')}
  `.trim();
}

console.log('Exercise 7: Code Generator');
console.log('='.repeat(50));
console.log(generateClass("Student",
  ["name", "age", "rollNo"],
  ["study", "takeExam"]
));

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    createStudentProfile,
    calculateTotal,
    generateTable,
    currency,
    generateWelcomeEmail,
    query,
    generateClass
  };
}

console.log('\n╔════════════════════════════════════════════════════════════════╗');
console.log('║  All Solutions Executed Successfully                           ║');
console.log('╚════════════════════════════════════════════════════════════════╝');
