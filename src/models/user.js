import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelizeConfig from '../config/sequelize.js';
class UserModel extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: {
          type: DataTypes.STRING(11),
          primaryKey: true,
        },
        fullName: {
          type: DataTypes.STRING(300),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(300),
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING(256),
          allowNull: false,
        },
        accepted: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        idUnit: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        idRole: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'users',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Unit, {
      foreignKey: 'idUnit',
      as: 'unit',
    });
    this.belongsTo(models.Role, {
      foreignKey: 'idRole',
      as: 'role',
    });
  }
}
UserModel.init(sequelizeConfig, Sequelize.DataTypes);
export default UserModel;
