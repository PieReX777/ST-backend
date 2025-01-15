import User from '@models/user'
import Roles from '@models/roles'

// Definir las relaciones
const setupAssociations = () => {
  User.belongsTo(Roles, { foreignKey: 'roleId', as: 'role' })
  Roles.hasMany(User, { foreignKey: 'roleId', as: 'users' })
}

export default setupAssociations
