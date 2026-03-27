const dbName = "emp";
const dbRef = db.getSiblingDB(dbName);

const companyId = ObjectId("6600a0010000000000000001");
const countryId = ObjectId("6600a0010000000000000002");
const stateId = ObjectId("6600a0010000000000000003");
const cityId = ObjectId("6600a0010000000000000004");
const roleId = ObjectId("6600a0010000000000000005");
const positionId = ObjectId("6600a0010000000000000006");
const departmentId = ObjectId("6600a0010000000000000007");
const salaryAdminId = ObjectId("6600a0010000000000000008");
const salaryHrId = ObjectId("6600a0010000000000000009");
const salaryEmployeeId = ObjectId("6600a0010000000000000010");
const adminEmployeeId = ObjectId("6600a0010000000000000011");
const hrEmployeeId = ObjectId("6600a0010000000000000012");
const employeeEmployeeId = ObjectId("6600a0010000000000000013");

dbRef.counters.deleteMany({});
dbRef.countries.deleteMany({});
dbRef.states.deleteMany({});
dbRef.cities.deleteMany({});
dbRef.companies.deleteMany({});
dbRef.roles.deleteMany({});
dbRef.positions.deleteMany({});
dbRef.departments.deleteMany({});
dbRef.salaries.deleteMany({});
dbRef.employees.deleteMany({});

dbRef.counters.insertMany([
  { model: "Country", field: "CountryID", count: 1 },
  { model: "State", field: "StateID", count: 1 },
  { model: "City", field: "CityID", count: 1 },
  { model: "Company", field: "CompanyID", count: 1 },
  { model: "Role", field: "RoleID", count: 1 },
  { model: "Position", field: "PositionID", count: 1 },
  { model: "Department", field: "DepartmentID", count: 1 },
  { model: "Salary", field: "SalaryID", count: 3 },
  { model: "Employee", field: "EmployeeID", count: 3 }
]);

dbRef.countries.insertOne({
  _id: countryId,
  CountryID: 1,
  CountryName: "India",
  states: [stateId],
  __v: 0
});

dbRef.states.insertOne({
  _id: stateId,
  StateID: 1,
  StateName: "West Bengal",
  country: [countryId],
  cities: [cityId],
  __v: 0
});

dbRef.cities.insertOne({
  _id: cityId,
  CityID: 1,
  CityName: "Kolkata",
  state: [stateId],
  __v: 0
});

dbRef.companies.insertOne({
  _id: companyId,
  CompanyID: 1,
  CompanyName: "AWS Employee Management Demo",
  Address: "Salt Lake Sector V, Kolkata",
  PostalCode: 700091,
  Website: "https://example.com",
  Email: "company@example.com",
  ContactPerson: "Demo Admin",
  ContactNo: "9999999999",
  FaxNo: "03312345678",
  PanNo: "ABCDE1234F",
  GSTNo: "22ABCDE1234F1Z5",
  CINNo: "L12345WB2020PLC123456",
  Deleted: false,
  city: [cityId],
  __v: 0
});

dbRef.roles.insertOne({
  _id: roleId,
  RoleID: 1,
  RoleName: "Administrator",
  company: [companyId],
  __v: 0
});

dbRef.positions.insertOne({
  _id: positionId,
  PositionID: 1,
  PositionName: "Full Stack Engineer",
  company: [companyId],
  __v: 0
});

dbRef.departments.insertOne({
  _id: departmentId,
  DepartmentID: 1,
  DepartmentName: "Operations",
  company: [companyId],
  __v: 0
});

dbRef.salaries.insertMany([
  {
    _id: salaryAdminId,
    SalaryID: 1,
    BasicSalary: "120000",
    BankName: "State Bank of India",
    AccountNo: "111111111111",
    AccountHolderName: "Admin User",
    IFSCcode: "SBIN0000001",
    TaxDeduction: "10",
    __v: 0
  },
  {
    _id: salaryHrId,
    SalaryID: 2,
    BasicSalary: "90000",
    BankName: "HDFC Bank",
    AccountNo: "222222222222",
    AccountHolderName: "HR User",
    IFSCcode: "HDFC0000002",
    TaxDeduction: "10",
    __v: 0
  },
  {
    _id: salaryEmployeeId,
    SalaryID: 3,
    BasicSalary: "70000",
    BankName: "ICICI Bank",
    AccountNo: "333333333333",
    AccountHolderName: "Employee User",
    IFSCcode: "ICIC0000003",
    TaxDeduction: "10",
    __v: 0
  }
]);

dbRef.employees.insertMany([
  {
    _id: adminEmployeeId,
    EmployeeID: 1,
    FirstName: "Admin",
    MiddleName: "Demo",
    LastName: "User",
    Email: "admin@gmail.com",
    Password: "admin",
    Gender: "male",
    DOB: new Date("1990-01-01T00:00:00.000Z"),
    DateOfJoining: new Date("2020-01-01T00:00:00.000Z"),
    TerminateDate: new Date("2099-12-31T00:00:00.000Z"),
    Deleted: false,
    Photo: "",
    ContactNo: "9000000001",
    EmployeeCode: "EMP001",
    Account: 1,
    role: [roleId],
    position: [positionId],
    department: [departmentId],
    salary: [salaryAdminId],
    education: [],
    familyInfo: [],
    workExperience: [],
    leaveApplication: [],
    BloodGroup: "A+",
    EmergencyContactNo: "9000000101",
    Hobbies: "Reading",
    PANcardNo: "ADMIN1234A",
    PermanetAddress: "Kolkata",
    PresentAddress: "Kolkata",
    __v: 0
  },
  {
    _id: hrEmployeeId,
    EmployeeID: 2,
    FirstName: "HR",
    MiddleName: "Demo",
    LastName: "User",
    Email: "hr@gmail.com",
    Password: "hr",
    Gender: "female",
    DOB: new Date("1992-02-02T00:00:00.000Z"),
    DateOfJoining: new Date("2021-02-02T00:00:00.000Z"),
    TerminateDate: new Date("2099-12-31T00:00:00.000Z"),
    Deleted: false,
    Photo: "",
    ContactNo: "9000000002",
    EmployeeCode: "EMP002",
    Account: 2,
    role: [roleId],
    position: [positionId],
    department: [departmentId],
    salary: [salaryHrId],
    education: [],
    familyInfo: [],
    workExperience: [],
    leaveApplication: [],
    BloodGroup: "B+",
    EmergencyContactNo: "9000000102",
    Hobbies: "Music",
    PANcardNo: "HRUSR1234B",
    PermanetAddress: "Kolkata",
    PresentAddress: "Kolkata",
    __v: 0
  },
  {
    _id: employeeEmployeeId,
    EmployeeID: 3,
    FirstName: "Employee",
    MiddleName: "Demo",
    LastName: "User",
    Email: "emp@gmail.com",
    Password: "emp",
    Gender: "male",
    DOB: new Date("1995-03-03T00:00:00.000Z"),
    DateOfJoining: new Date("2022-03-03T00:00:00.000Z"),
    TerminateDate: new Date("2099-12-31T00:00:00.000Z"),
    Deleted: false,
    Photo: "",
    ContactNo: "9000000003",
    EmployeeCode: "EMP003",
    Account: 3,
    role: [roleId],
    position: [positionId],
    department: [departmentId],
    salary: [salaryEmployeeId],
    education: [],
    familyInfo: [],
    workExperience: [],
    leaveApplication: [],
    BloodGroup: "O+",
    EmergencyContactNo: "9000000103",
    Hobbies: "Travel",
    PANcardNo: "EMPLO1234C",
    PermanetAddress: "Kolkata",
    PresentAddress: "Kolkata",
    __v: 0
  }
]);
