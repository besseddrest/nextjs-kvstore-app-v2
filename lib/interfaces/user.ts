export default interface User {
  id: number,
  ldap: string, // first initial + last name, lowercase
  isAdmin: boolean,
}