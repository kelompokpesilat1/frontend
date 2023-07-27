export function getUserRoleById(id) {
  switch (id) {
    case 1:
      return 'admin'
    case 2:
      return 'author'
    default:
      return 'user'
  }
}
