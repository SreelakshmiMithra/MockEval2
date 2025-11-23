let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};
emp.details?.profile?.role
console.log(emp.details?.profile?.role);